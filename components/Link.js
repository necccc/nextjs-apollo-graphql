import Route from './Route'
import Link from 'next/link'

export default (props) => (<Route.Consumer>
	{routes => {
		const {
			key,
			prefetch,
			replace,
			shallow,
			passHref,
			scroll,
			to
		} = props

		let urlParams = to.match(/:[\w-_]*/ig)
		let propParams = []
		let as = to
		let href = `/${routes[to]}`

		const linkProps = {
			key,
			prefetch,
			replace,
			shallow,
			passHref,
			scroll
		}

		if (urlParams) {
			propParams = urlParams.map(str => str.replace(':', ''))
		}

		if (propParams.length > 0) {
			as = urlParams.reduce((url, param, index)=> {
				url = url.replace(param, props[[propParams[index]]])
				return url
			}, to)

			href = urlParams.reduce((url, param, index)=> {
				const amp = url[url.length - 1] === '?' ? '' : '&'
				url += `${amp}${propParams[index]}=${props[[propParams[index]]]}`
				return url
			}, `${href}?`)
		}

		linkProps.as = as
		linkProps.href = href

		return (<Link {...linkProps} >
			{props.children}
		</Link>)

	}}
	</Route.Consumer>
)