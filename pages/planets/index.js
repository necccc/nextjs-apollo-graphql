import React from 'react'
import Head from 'next/head'
import Layout from '../../layouts/Default'
import ListPage from '../../components/ListPage'
import withData from './data'

class Planets extends React.Component {

	render() {
		const type = "planet"
		const title = "Planets"

		const { loading, data, page, count, loadPage} = this.props

		const onPagerChange = ({page}) => {
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
				data={ data }
				type={ type }
				title={ title }
			/>
		</Layout>
	}
}

export default withData(Planets)