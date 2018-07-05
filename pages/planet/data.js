import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const planetBasic = gql`
  query planetBasic($id: ID) {
    Planet(id: $id) {
      id
			name
    }
  }
`

export const planetFull = gql`
  query planetFull($id: ID) {
    Planet(id: $id) {
      id
			name
			terrain
			climate
			diameter
			gravity
			orbital_period
			population
			rotation_period
			surface_water
			picture
			residents {
				name
				picture
				id
			}
    }
  }
`

export default compose(
	graphql(planetBasic, basicOptions),
	graphql(planetFull, basicOptions)
)