import React from 'react'
import Head from 'next/head'
import Layout from '../../layouts/Default'
import Title from '../../components/Title'
import DetailPage from '../../components/Detail/Page'
import DetailList from '../../components/Detail/List'
import DetailRelated from '../../components/Detail/Related'
import DetailImage from '../../components/Detail/Image'
import Breadcrumbs from '../../components/Breadcrumbs';

import css from "./styles.scss"

import withData, { relatedPeopleQuery } from './data'

const RelatedPeople = relatedPeopleQuery(DetailRelated)

const excludeDetails = ['id', 'picture', 'people', 'name']

class Species extends React.Component {

	static getDerivedStateFromProps (props, state) {
		const newState = {}

		newState.relatedPeople = state ? state.relatedPeople : {
			skip: true,
			first: 6,
			offset: 0
		}

		return Object.assign({}, state || {}, newState)
	}


	loadMore = () => {
		let { relatedPeople: { offset }} = this.state
		offset += 6
		this.setState({ relatedPeople: {
			skip: false,
			first: 6,
			offset
		} })
	}

	render() {
		const { id, data: { fetchMore, loading, Species }} = this.props
		const { relatedPeople } = this.state

		return <Layout>
				<Head>
        		<title>{Species.name} - Star Wars Library</title>
      		</Head>
			<DetailPage>
				<Breadcrumbs items={[
					{ path: '/', label: 'Home'},
					{ path: '/species', label: 'Species'},
					{ path: `/species/:id`, params: { id: Species.id }, label: Species.name }
				]} />

				<Title>
					{ Species.name }
				</Title>

				<div className="bx--row ">
					<div className="bx--col-lg-4">
						<DetailImage picture={ Species.picture } alt={ Species.name } loading={ loading } />
					</div>

					<div className="bx--col-lg-8">

						<div className="item-data">
							<h3 className="bx--type-gamma person-side-heading">Details</h3>

							<DetailList data={ Species } exclude={ excludeDetails } loading={ loading } />
						</div>

						{ (!Species.people || Species.people.length < 1) ? (''):(
							<RelatedPeople
								title="People"
								type="person"
								id={ Species.id }
								first={ relatedPeople.first }
								offset={ relatedPeople.offset }
								data={ Species.people }
								total={ Species._peopleMeta.count }
								loadMore={ () => this.loadMore() }
								skip={ relatedPeople.skip }
							/>
						)}

					</div>
				</div>

			</DetailPage>
		</Layout>
	}
}

Species.getInitialProps = async function ({ query }) {
	return {
		id: query.id
	}
}

export default withData(Species)