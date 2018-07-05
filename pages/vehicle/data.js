import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const vehicleBasic = gql`
  query VehicleBasic($id: ID) {
    Vehicle(id: $id) {
			name
			id
    }
  }
`

export const vehicleFull = gql`
  query VehicleFull($id: ID) {
    Vehicle(id: $id) {
			name
			id
			model
			manufacturer
			vehicle_class
			cargo_capacity
			passengers
			crew
			consumables
			picture
			pilots {
				picture
				name
				id
			}
    }
  }
`

export default compose(
	graphql(vehicleBasic, basicOptions),
	graphql(vehicleFull, basicOptions)
)