import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const peopleBasic = gql`
	query peopleBasic($page: Int = 1) {
		allPersons(page: $page) {
			name
			id
		}
		_allPersonsMeta {
			count
		}
	}
`

export default graphql(peopleBasic, {
	options: basicOptions.options,
	props: ({data, ownProps}) => {
		const { fetchMore } = data

		const loadPage = (page) => {
			return fetchMore({
				variables: {
					page
				},
				updateQuery: (prev, { variables, fetchMoreResult }) => {

						if (!fetchMoreResult) return prev

						return Object.assign({}, fetchMoreResult)
					}
			})
		}
		return Object.assign({}, ownProps, { data, loadPage })
	}
})