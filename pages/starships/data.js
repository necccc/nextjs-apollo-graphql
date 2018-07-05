import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const starshipBasic = gql`
	query starshipBasic($page: Int = 1) {
		allStarships(page: $page) {
			name
			id
		}
		_allStarshipsMeta {
			count
		}
	}
`

export default graphql(starshipBasic, {
	options: basicOptions.options,
	props: ({data, ownProps}) => {
		const { fetchMore } = data

		const loadPage = (page) => {
			return fetchMore({
				variables: {
					page
				},
				updateQuery: (prev, { variables, fetchMoreResult }) => {

						if (!fetchMoreResult) return prev;

						return Object.assign({}, fetchMoreResult)
					}
			})
		}
		return Object.assign({}, ownProps, { data, loadPage })
	}
})