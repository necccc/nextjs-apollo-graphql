module.exports = (ex) => {
	console.error(ex.stack)
	process.exit(1)
}