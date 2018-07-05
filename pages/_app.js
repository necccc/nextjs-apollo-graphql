import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'

import withApolloClient from '../apollo'
import cacheRedirects from '../data/cacheRedirects'
import dataIdFromObject from '../data/dataIdFromObject'

class MyApp extends App {
	render () {
	  const {Component, pageProps, apolloClient} = this.props
	  return <Container>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
	  </Container>
	}
}

export default withApolloClient(MyApp, { cacheRedirects, dataIdFromObject })