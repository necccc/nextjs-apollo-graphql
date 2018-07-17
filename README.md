# nextjs-apollo-graphql

[See it in action here](http://bit.ly/starwars-graphql-nextjs)

This is a small, proof-of-concept site, fetching and displaying data from the Star Wars API over GraphQL.

The project builds on:
- [NextJS](https://nextjs.org/)
- [Express](https://expressjs.com/)
- [Apollo GraphQL Client](https://www.apollographql.com/docs/react/)
- [React](https://reactjs.org/)
- [A GraphQL server](https://github.com/necccc/starwars-graphql) running with [Apollo Engine](https://www.apollographql.com/engine)
- [Carbon Design System by IBM](http://www.carbondesignsystem.com/)
- [Star Wars visual guide](https://starwars-visualguide.com/), which seems to be using the SWAPI too, but has images!






## Install & run locally

```bash
npm i
npm run dev
```

You can try out running it in docker containers, as a deployed instance

```bash
npm run build
```


## Deploy to now.sh
If you have a [now](https://zeit.co/now/) account active on your desktop, you can deploy to now

```bash
npm run deploy
```

### Note on deployment & docker images
This setup creates two docker images, one for the app, using Alpine Node images, the other one is for static assets using nginx.

With this, I would like to demonstrate a near-real-life deployment, to a CDN, or any cluster for static assets.
