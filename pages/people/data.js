import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions, listPageUpdateQuery } from '../../data/detailsCommon'

export const peopleBasic = gql`
	query peopleBasic($page: Int = 1) {
		personPages(page: $page) {
			page
			count
			items {
				name
				id
			}
		}
	}
`

export default graphql(peopleBasic, {
	options: basicOptions.options,
	props: ({data, ownProps}) => {

		const { loading, fetchMore, personPages = {} } = data
		const { page = 1, count = 0, items = [] } = personPages

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