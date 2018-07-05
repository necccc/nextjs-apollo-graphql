
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'

export const speciesBasic = gql`
  query speciesBasic($id: ID) {
    Species(id: $id) {
      id
			name
    }
  }
`

export const speciesFull = gql`
  query speciesFull($id: ID) {
    Species(id: $id) {
      id
			name
			classification
			homeworld {
				id
				name
			}
			designation
			language
			average_height
			average_lifespan
			picture
			people {
				id
				name
				picture
			}
			_peopleMeta {
				count
			}
    }
  }
`

export const relatedPeople = gql`
  query speciesPeople($id: ID $first: Int $offset: Int) {
    Species(id: $id) {
			id
			people(first: $first offset: $offset) {
				id
				name
				picture
			}
    }
  }
`

const basicOpts = {
	options: props => {
		return {
			variables: {
				id: props.id
			},
		}
	},
	props: ({data, ownProps}) => {
		if (ownProps.data) {
			return Object.assign({}, ownProps, { data: Object.assign({}, ownProps.data, data) })
		}
		return Object.assign({}, ownProps, { fetchingMorePeople: false, data })
	}
}

export const relatedPeopleOpts = {

	options: props => ({
		variables: {
			id: props.id,
			first: props.first || 6,
			offset: props.offset || 0
		}
	}),

	skip: props => props.skip,

	props: ({data, ownProps}) => {
		let newProps = Object.assign({}, ownProps, { loading: data.loading || false })

		if (data.error) console.error(data.error)

		if (!data.Species) return newProps

		const { variables, loading, Species: { people } } = data

		newProps = Object.assign({}, newProps, { variables, loading }, { data: [ ...people ]})

		return newProps
	}
}

export const relatedPeopleQuery = graphql(relatedPeople, relatedPeopleOpts)

export default compose(
	graphql(speciesBasic, basicOpts), //immediately falls through, resolved from cache ;)
	graphql(speciesFull, basicOpts)
)
