import Head from 'next/head'
import Layout from '../../layouts/Default'
import Title from '../../components/Title'



import css from './styles.scss'

const About = () => (
	<Layout>
		<Head>
			<title>About - Star Wars Library</title>
		</Head>

		<Title>About this project</Title>

		<div className="bx--row ">
			<div className="bx--col-lg-8">
				<div className="static-text">

					<p>This is a small, proof-of-concept site, fetching and displaying data from the Star Wars API over GraphQL.</p>

					<p>The project builds on:</p>

					<ul>
						<li>NextJS</li>
						<li>Express</li>
						<li>Apollo GraphQL Client</li>
						<li>React</li>
						<li>A GraphQL server running with Apollo Engine</li>
						<li>Carbon Design System by IBM</li>
						<li>Star Wars visual guide, which seems to be using the SWAPI too, but has images!</li>
					</ul>

					<p>
						This setup creates two docker images, one for the app, using Alpine Node images, the other one is for static assets using nginx.
					</p>
					<p>
						With this, I would like to demonstrate a near-real-life deployment, to a CDN, or any cluster for static assets.
					</p>
				</div>
			</div>
		</div>
	</Layout>
)

export default About