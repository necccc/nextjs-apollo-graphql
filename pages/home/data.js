import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const allPosts = gql`
	query Home {
		personPages {
			page
			count
			items {
				name
				id
			}
		}
		vehiclePages {
			page
			count
			items {
				name
				id
			}
		}
		planetPages {
			page
			count
			items {
				name
				id
			}
		}
		starshipPages {
			page
			count
			items {
				name
				id
			}
		}
	}
`

export default graphql(allPosts, {
	options: (...args) => {
		return {
		}
	},
	props: ({data, ownProps}) => {

		const {
			loading,
			personPages = {items: []},
			vehiclePages = {items: []},
			planetPages = {items: []},
			starshipPages = {items: []}
		} = data

		const newProps = {
			loading,
			vehicles: vehiclePages.items,
			planets: planetPages.items,
			persons: personPages.items,
			starships: starshipPages.items,
		}

	  	return Object.assign({}, ownProps, newProps)
	}
})