const withTM = require('@weco/next-plugin-transpile-modules')
const withSass = require('@zeit/next-sass')
const routing = require('./routing')
const isProd = process.env.NODE_ENV === 'production'

const assetPrefix = isProd ? process.env.ASSET_URL : ''

module.exports = withTM(withSass({

	port: process.env.APP_PORT || 80,

	transpileModules: [],

	publicRuntimeConfig: {
		asset_url: process.env.ASSET_URL,
		apollo: {
			link: {
				uri: process.env.API_URL,
			}
		},
	},

  // use css modules with sass
  // https://github.com/zeit/next-plugins/tree/master/packages/next-sass#with-css-modules
	cssModules: false,

  // turn off file based routing
  // https://github.com/zeit/next.js#disabling-file-system-routing
	useFileSystemPublicRoutes: false,

	assetPrefix,
}))