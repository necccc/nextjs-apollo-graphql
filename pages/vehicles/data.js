import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions, listPageUpdateQuery } from '../../data/detailsCommon'

export const vehicleBasic = gql`
	query vehicleBasic($page: Int = 1) {
		vehiclePages(page: $page) {
			page
			count
			items {
				name
				id
			}
		}
	}
`

export default graphql(vehicleBasic, {
	options: basicOptions.options,
	props: ({data, ownProps}) => {

		const { loading, fetchMore, vehiclePages = {} } = data
		const { page = 1, count = 0, items = [] } = vehiclePages

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