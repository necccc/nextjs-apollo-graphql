import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions, listPageUpdateQuery } from '../../data/detailsCommon'

export const starshipBasic = gql`
	query starshipBasic($page: Int = 1) {
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

export default graphql(starshipBasic, {
	options: basicOptions.options,
	props: ({data, ownProps}) => {

		const { loading, fetchMore, starshipPages = {} } = data
		const { page = 1, count = 0, items = [] } = starshipPages

		const loadPage = (page) => {
			return fetchMore({
				variables: {
					page
				},
				updateQuery: listPageUpdateQuery
			})
		}
		return Object.assign({}, ownProps, { data: items, page, count, loadPage, loading })
	}
})