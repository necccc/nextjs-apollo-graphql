import React from 'react'
import Layout from '../../layouts/Default'
import ListPage from '../../components/ListPage'
import withData from './data'

class Vehicles extends React.Component {

	static getDerivedStateFromProps(props, state) {
		const { data: { loading }} = props

		let page = 1

		if (state && typeof state.page !== 'undefined') {
			page = state.page
		}

		return {
			page,
			loading
		}
	}

	render() {
		const type = "vehicle"
		const title = "Vehicles"

		const { page, loading } = this.state
		const { loadPage, data }  = this.props

		const items = data[`all${ title }`]

		let count = 0

		if (!loading) {
			count = data[`_all${ title }Meta`].count
		}

		const onPagerChange = ({page}) => {
			this.setState({ loading: true , page })
			loadPage(page)
		}

		return <Layout>
			<ListPage
				onPagerChange={ onPagerChange }
				page={ page }
				count={ count }
				loading={ loading }
				data={ items }
				type={ type }
				title={ title }
			/>
		</Layout>
	}
}

export default withData(Vehicles)