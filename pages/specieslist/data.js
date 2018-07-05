import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const speciesBasic = gql`
	query speciesBasic($page: Int = 1) {
		allSpecies(page: $page) {
			name
			id
		}
		_allSpeciesMeta {
			count
		}
	}
`

export default graphql(speciesBasic, {
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