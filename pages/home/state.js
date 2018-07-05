import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

export const allPosts = gql`
	query Home {
		allPersons {
			name
			id
		}
		allVehicles {
			name
			id
		}
		allPlanets {
			name
			id
		}
		allStarships {
			name
			id
		}
	}
`

export default graphql(allPosts, {
	options: (...args) => {
		return {
		}
	},
	props: ({data, ownProps}) => {
	  return data
	}
})