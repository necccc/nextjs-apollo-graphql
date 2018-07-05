import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const vehicleBasic = gql`
	query vehicleBasic($page: Int = 1) {
		allVehicles(page: $page) {
			name
			id
		}
		_allVehiclesMeta {
			count
		}
	}
`

export default graphql(vehicleBasic, {
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