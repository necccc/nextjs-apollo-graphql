import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions, listPageUpdateQuery } from '../../data/detailsCommon'

export const planetsBasic = gql`
	query planetsBasic($page: Int = 1) {
		planetPages(page: $page) {
			page
			count
			items {
				name
				id
			}
		}
	}
`

export default graphql(planetsBasic, {
	options: basicOptions.options,
	props: ({data, ownProps}) => {

		const { loading, fetchMore, planetPages = {} } = data
		const { page = 1, count = 0, items = [] } = planetPages

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