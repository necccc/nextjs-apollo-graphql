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

const excludeDetails = ['id', 'picture', 'name', 'vehicles', 'starships']

class Person extends React.Component {
	render() {
		const { id, data: { loading, Person }} = this.props

		return <Layout>
			<Head>
        		<title>{Person.name} - Star Wars Library</title>
      		</Head>
			<DetailPage>
				<Breadcrumbs items={[
					{ path: '/', label: 'Home'},
					{ path: '/people', label: 'People'}
				]} />

				<Title>
					{Person.name}
				</Title>

				<div className="bx--row ">

					<div className="bx--col-lg-4">
						<DetailImage picture={ Person.picture } alt={ Person.name } />
					</div>

					<div className="bx--col-lg-8">
						<div className="item-data">
							<h3 className="bx--type-gamma person-side-heading">Personal Details</h3>

							<DetailList data={ Person } exclude={ excludeDetails } loading={ loading } />
						</div>

						{ (!Person.starships || Person.starships.length < 1) ? (''):(
							<DetailRelated title="Starships" type="starship" data={ Person.starships } />
						)}

						{ (!Person.vehicles || Person.vehicles.length < 1) ? (''):(
							<DetailRelated title="Vehicles" type="vehicle" data={ Person.vehicles } />
						)}
					</div>
				</div>

			</DetailPage>
		</Layout>
	}
}

Person.getInitialProps = async function ({ query }) {
	return {
		id: query.id
	}
}

export default withData(Person)