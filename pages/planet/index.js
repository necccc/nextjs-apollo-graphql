import React from 'react'
import Head from 'next/head'
import Layout from '../../layouts/Default'
import Title from '../../components/Title'
import DetailPage from '../../components/Detail/Page'
import DetailList from '../../components/Detail/List'
import DetailRelated from '../../components/Detail/Related'
import DetailImage from '../../components/Detail/Image'
import Breadcrumbs from '../../components/Breadcrumbs';

import css from './styles.scss'

import withData from './data'

const excludeDetails = ['id', 'name', 'picture', 'residents']

class Planet extends React.Component {
	render() {
		const { id, data: { loading, Planet }} = this.props

		return <Layout>
			<Head>
        		<title>{Planet.name} - Star Wars Library</title>
      		</Head>
			<DetailPage>
				<Breadcrumbs items={[
					{ path: '/', label: 'Home'},
					{ path: '/planets', label: 'Planets'}
				]} />

				<Title>
					{ Planet.name }
				</Title>

				<div className="bx--row ">

					<div className="bx--col-lg-4">

						<div className="bx--col-lg-4">
						<DetailImage picture={ Planet.picture } alt={ Planet.name } loading={ loading } />
					</div>


					</div>
					<div className="bx--col-lg-8">
						<div className="item-data">
							<h3 className="bx--type-gamma person-side-heading">Details</h3>

							<DetailList data={ Planet } exclude={ excludeDetails } loading={ loading } />

						</div>

						{ (!Planet.residents || Planet.residents.length < 1) ? (''):(
							<DetailRelated title="Residents" type="person" data={ Planet.residents } />
						)}
					</div>
				</div>
			</DetailPage>
		</Layout>
	}
}

Planet.getInitialProps = async function ({ query }) {
	return {
		id: query.id
	}
}

export default withData(Planet)