import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export const getStarships = gql`
	query getStarships($page: Int = 1) { # expecting 'page' variable
		starshipPages(page: $page) {
			page
			count
			items {
				name
				id
			}
		}
	}
`

const List = (props) => (<div>
	{ props.loading ? 'LOADING' : '' }
	<ul>
		{
			props.data.map( item => (<li key={item.id}>
				{item.name}
			</li>))
		}
	</ul>
	<button onClick={e => props.loadPage(props.page + 1) }>Load Page {props.page + 1}</button>
</div>)

export default graphql(getStarships, {
	options: {
		notifyOnNetworkStatusChange: true,
		variables: { // fill parameters for the query here
			page: 1 // first query will use 1
		},
	},
	props: ({data, ownProps}) => {

		const {
			fetchMore,
			allStarships,
			loading
		} = data

		const newProps = {
			loading,
			data: allStarships.items,
			page: allStarships.page,
			loadPage: (nextPage) => {
				return fetchMore({
					variables: {
						page: nextPage
					},
					updateQuery: (prev, { variables, fetchMoreResult }) => {

						if (!fetchMoreResult) return prev;

						return Object.assign({}, fetchMoreResult, { variables })
					}
				})
			}
		}

		return Object.assign({}, ownProps, newProps)
	}
})(List)



/*

console.log(page);


				return fetchMore({
					variables: {
						page
					},
					updateQuery: (prev, { variables, fetchMoreResult }) => {
	
							if (!fetchMoreResult) return prev;
	
							return Object.assign({}, fetchMoreResult)
						}
				})
				*/