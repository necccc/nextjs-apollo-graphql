import fetch from 'isomorphic-unfetch'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { getDataFromTree } from 'react-apollo'
import Head from 'next/head'
import getConfig from 'next/config'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const create = function (initialState, { cacheRedirects, dataIdFromObject } = {}) {
	const { publicRuntimeConfig: { apollo } } = getConfig()
	const { link, cache = {} } = apollo

	cache.cacheRedirects = cacheRedirects
	cache.dataIdFromObject = dataIdFromObject

	const cacheInstance = new InMemoryCache(cache).restore(initialState || {})

	return new ApolloClient({
		connectToDevTools: process.browser,
		ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
		link: new HttpLink(link),
		cache: cacheInstance
	})
}

const initApollo = function (initialState, cacheProps) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!process.browser) {
		return create(initialState, cacheProps)
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState, cacheProps)
	}

	return apolloClient
}

export default (App, { cacheRedirects = {}, dataIdFromObject = ()=>{} } = {}) => {

  return class Apollo extends React.Component {

	static displayName = 'withApollo(App)'

    static async getInitialProps (ctx) {
		const { Component, router } = ctx
		let appProps = {}

		if (App.getInitialProps) {
			appProps = await App.getInitialProps(ctx)
		}

		const apolloState = {}

		// Run all GraphQL queries in the component tree
		// and extract the resulting data
		const apollo = initApollo(null, { cacheRedirects, dataIdFromObject })

		if(!process.browser) {
			try {
				// Run all GraphQL queries
				await getDataFromTree(
					<App
						{...appProps}
						Component={Component}
						router={router}
						apolloState={apolloState}
						apolloClient={apollo}
					/>
				)
			} catch (error) {
				// Prevent Apollo Client GraphQL errors from crashing SSR.
				// Handle them in components via the data.error prop:
				// http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
				console.error('Error while running `getDataFromTree`', error)
			}
		}

		if (!process.browser) {
			// getDataFromTree does not call componentWillUnmount
			// head side effect therefore need to be cleared manually
			Head.rewind()
		}

		// Extract query data from the Apollo store
		apolloState.data = apollo.cache.extract()

		return {
			...appProps,
			apolloState
		}
	}

    constructor (props) {
      super(props)
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = props.apolloClient || initApollo(props.apolloState.data, {cacheRedirects, dataIdFromObject})
    }

    render () {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}