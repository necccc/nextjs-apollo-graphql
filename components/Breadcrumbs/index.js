import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';
import Link from '../Link'
import css from "./styles.scss"

export default (props) => (
	<Breadcrumb className="breadcrumbs">
		{props.items.map(({ path, label, params = {}}) => (
			<Link to={ path } { ...params }>
				<BreadcrumbItem>
					<span>{ label }</span>
				</BreadcrumbItem>
			</Link>
		))}
	</Breadcrumb>
)