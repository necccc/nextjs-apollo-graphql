const routes = {
	'/': 'home',
	'/about': 'about',
	'/people': 'people',
	'/person/:id': 'person',
	'/starships': 'starships',
	'/starship/:id': 'starship',
	'/vehicles': 'vehicles',
	'/vehicle/:id': 'vehicle',
	'/planets': 'planets',
	'/planet/:id': 'planet',
	'/species': 'specieslist',
	'/species/:id': 'species',
}

module.exports = () => routes