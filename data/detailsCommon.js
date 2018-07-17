export const basicOptions = {
	options: props => {
		return {
			notifyOnNetworkStatusChange: true,
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

export const listPageUpdateQuery = (prev, { variables, fetchMoreResult }) => {

	if (!fetchMoreResult) return prev

	return Object.assign({}, fetchMoreResult)
}