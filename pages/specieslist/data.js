import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions, listPageUpdateQuery } from '../../data/detailsCommon'

export const speciesBasic = gql`
	query speciesBasic($page: Int = 1) {
		speciesPages(page: $page) {
			page
			count
			items {
				name
				id
			}
		}
	}
`

export default graphql(speciesBasic, {
	options: basicOptions.options,
	props: ({data, ownProps}) => {

		const { loading, fetchMore, speciesPages = {} } = data
		const { page = 1, count = 0, items = [] } = speciesPages

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