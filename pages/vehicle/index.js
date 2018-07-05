import React from 'react'
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

class Vehicle extends React.Component {
	render() {
		const { id, data: { loading, Vehicle }} = this.props

		return <Layout>
			<DetailPage>
				<Breadcrumbs items={[
					{ path: '/', label: 'Home'},
					{ path: '/vehicles', label: 'Vehicles'},
					{ path: '/vehicle/:id', params: { id: Vehicle.id }, label: Vehicle.name }
				]} />

				<Title>
					{ Vehicle.name }
				</Title>

				<div className="bx--row ">

					<div className="bx--col-lg-4">
						<DetailImage picture={ Vehicle.picture } alt={ Vehicle.name } loading={ loading } />
					</div>

					<div className="bx--col-lg-8">
						<div className="item-data">
							<h3 className="bx--type-gamma">Vehicle Details</h3>

							<DetailList data={ Vehicle } exclude={ excludeDetails } loading={ loading } />
						</div>

						{ (!Vehicle.pilots || Vehicle.pilots.length < 1) ? (''):(
							<DetailRelated title="Drivers" type="person" data={ Vehicle.pilots } />
						)}

					</div>
				</div>
			</DetailPage>
		</Layout>
	}
}

Vehicle.getInitialProps = async function ({ query }) {

	return {
		id: query.id
	}
}

export default withData(Vehicle)