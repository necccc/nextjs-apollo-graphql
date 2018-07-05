if(process.env.NODE_ENV !== "production") {
	require('dotenv').config()
}

const server = require('./server')
const routing = require('./routing')
const config = require('./next.config')

server(routing, config)