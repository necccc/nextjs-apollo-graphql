export default {
    Query: {
      	Vehicle: (_, args, { getCacheKey }) => {
		  	return getCacheKey({ __typename: 'Vehicle', id: args.id })
	  	},
		Person: (_, args, { getCacheKey }) => {
			return getCacheKey({ __typename: 'Person', id: args.id })
		},
		Planet: (_, args, { getCacheKey }) => {
			return getCacheKey({ __typename: 'Planet', id: args.id })
		},
		Starship: (_, args, { getCacheKey }) => {
			return getCacheKey({ __typename: 'Starship', id: args.id })
		},
		Species: (_, args, { getCacheKey }) => {
			return getCacheKey({ __typename: 'Species', id: args.id })
		},
		allVehicles: (_, args, { getCacheKey }) => {
			let page = args ? args.page : 1
			return getCacheKey({ __typename: 'allVehicles', page })
		}
    },
  }