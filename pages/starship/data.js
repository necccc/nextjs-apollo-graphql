
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const starshipBasic = gql`
  query starshipBasic($id: ID) {
    Starship(id: $id) {
      id
			name
    }
  }
`

export const starshipFull = gql`
  query starshipFull($id: ID) {
    Starship(id: $id) {
      id
			name
			model
			starship_class
			manufacturer
			hyperdrive_rating
			cargo_capacity
			length
			passengers
			crew
			consumables
			MGLT
			picture
			pilots {
				name
				id
				picture
			}
    }
  }
`

export default compose(
	graphql(starshipBasic, basicOptions),
	graphql(starshipFull, basicOptions)
)