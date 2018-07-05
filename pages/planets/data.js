import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const planetsBasic = gql`
	query planetsBasic($page: Int = 1) {
		allPlanets(page: $page) {
			name
			id
		}
		_allPlanetsMeta {
			count
		}
	}
`

export default graphql(planetsBasic, {
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