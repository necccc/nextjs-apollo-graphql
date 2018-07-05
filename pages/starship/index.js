import React from 'react'
import Head from 'next/head'
import Link from '../../components/Link'
import Layout from '../../layouts/Default'
import Title from '../../components/Title'
import DetailPage from '../../components/Detail/Page'
import DetailList from '../../components/Detail/List'
import DetailRelated from '../../components/Detail/Related'
import DetailImage from '../../components/Detail/Image'
import Breadcrumbs from '../../components/Breadcrumbs';

import css from './styles.scss'

import withData from './data'

const excludeDetails = ['id', 'picture', 'pilots', 'name']

class Starship extends React.Component {
	render() {
		const { id, data: { loading, Starship }} = this.props

		return <Layout>
			<Head>
        		<title>{Starship.name} - Star Wars Library</title>
      		</Head>
			<DetailPage>
				<Breadcrumbs items={[
					{ path: '/', label: 'Home'},
					{ path: '/starships', label: 'Starships'},
					{ path: '/starship/:id', params: { id: Starship.id }, label: Starship.name }
				]} />

				<Title>
					{ Starship.name }
				</Title>

				<div className="bx--row item-page">
					<div className="bx--col-lg-4">
						<DetailImage picture={ Starship.picture } alt={ Starship.name } loading={ loading } />
					</div>

					<div className="bx--col-lg-8">

						<div className="item-data">
							<h3 className="bx--type-gamma person-side-heading">Details</h3>

							<DetailList data={ Starship } exclude={ excludeDetails } loading={ loading } />

						</div>

						{ (!Starship.pilots || Starship.pilots.length < 1) ? (''):(
							<DetailRelated title="Pilots" type="person" data={ Starship.pilots } />
						)}

					</div>
				</div>

			</DetailPage>
		</Layout>
	}
}

Starship.getInitialProps = async function ({ query }) {
	return {
		id: query.id
	}
}

export default withData(Starship)