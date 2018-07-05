const next = require('next')
const express = require('express')
const router = require('./router');
const errorHandler = require('./errorHandler')

const dev = process.env.NODE_ENV !== 'production'

module.exports = function (getRoutes, config) {
	const app = next({ dev })
	const handle = app.getRequestHandler()
	const nextConfig = app.nextConfig

	const initNext = (app) => {
		return app
			.prepare()
			.then(() => {
				const server = express()
				const routes = router(app, getRoutes)

				server.nextConfig = app.nextConfig
				return server
			})
	}

	const attachNextRoutes = (server) => {
		const routes = router(app, getRoutes)
		server.use('/', routes)
		server.get('*', (req, res) => handle(req, res))
		return server
	}

	const startServer = (server) => {
		const { port } = nextConfig
		server.listen(port, (err) => {
			if (err) throw err
			console.log(`> Ready on http://0.0.0.0:${port}`)
		})
	}

	return Promise.resolve(app)
		.then(initNext)
		.then(attachNextRoutes)
		.then(startServer)
		.catch(errorHandler)
}
