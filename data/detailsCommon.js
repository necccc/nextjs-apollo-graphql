export const basicOptions = {
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