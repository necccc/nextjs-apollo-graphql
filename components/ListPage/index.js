import React from 'react'
import Link from '../Link'
import { SkeletonText, PaginationV2 } from 'carbon-components-react';
import Breadcrumbs from '../../components/Breadcrumbs';
import Title from '../../components/Title'

import css from "./styles.scss"


class ListPage extends React.Component {
  render () {
    const { children, onPagerChange, title, page, count, loading, data, type } = this.props

    return <div className="list-page">

		<Breadcrumbs items={[
			{ path: '/', label: 'Home'},
			{ path: `/${type}`, label: title}
		]} />

		<Title>
			{ title }
		</Title>

		<div className="bx--row ">
			<div className="bx--col-lg-8">
				<div className="item-list">

					<PaginationV2
						onChange={ onPagerChange }
						page={ page }
						pageSize={ 10 }
						pageSizes={ [10] }
						totalItems={ count }
						className="item-pager"
						disabled={ loading }
					/>

					<ul className="list-page__item-list">
						{ (loading) ? (
							<SkeletonText lineCount={6} width="30%" paragraph />
						) : (
							data.map( item => {
								return (
								<li key={`${item.id}`}>
									<Link to={`/${type}/:id`} id={ item.id }>
										<a>{item.name}</a>
									</Link>
								</li>
								)
							})
						)}
					</ul>

				</div>
			</div>
		</div>
    </div>
  }
}

export default ListPage