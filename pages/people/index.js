import React from 'react'
import Head from 'next/head'
import Layout from '../../layouts/Default'
import ListPage from '../../components/ListPage'

import withData from './data'

class People extends React.Component {

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
		const type = "person"
		const title = "People"

		const { page, loading } = this.state
		const { loadPage, data }  = this.props

		const items = data[`allPersons`]

		let count = 0

		if (!loading) {
			count = data[`_allPersonsMeta`].count
		}

		const onPagerChange = ({page}) => {
			this.setState({ loading: true , page })
			loadPage(page)
		}

		return <Layout>
			<Head>
        		<title>{title} - Star Wars Library</title>
      		</Head>
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

export default withData(People)