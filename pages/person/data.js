import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import { basicOptions } from '../../data/detailsCommon'

export const personBasic = gql`
  query PersonBasic($id: ID) {
    Person(id: $id) {
      id
			name
    }
  }
`

export const personFull = gql`
  query PersonFull($id: ID) {
    Person(id: $id) {
      id
			name
      picture
      gender
		  eye_color
		  hair_color
		  mass
		  skin_color
		  birth_year
		  starships {
        id
        name
        picture
      }
		  homeworld {
        id
        name
        picture
      }
		  species {
        id
        name
      }
		  vehicles {
        id
        name
        picture
      }
    }
  }
`

export default compose(
	graphql(personBasic, basicOptions),
	graphql(personFull, basicOptions)
)