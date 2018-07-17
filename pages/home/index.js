import React from 'react'
import Head from 'next/head'
import Layout from '../../layouts/Default'
import Title from '../../components/Title'
import Topic from '../../components/Topic'

import withData from './data'

class Index extends React.Component {
  render() {
    const { planets, vehicles, persons, starships, loading } = this.props

    return <Layout>
      <Head>
        <title>Star Wars Library</title>
      </Head>
      <Title>
        Star Wars library
      </Title>

      <div className="bx--row">
        <Topic
          title="People"
          type="person"
          types="people"
          data={ persons }
          loading={ loading }
        />

        <Topic
          title="Starships"
          type="starship"
          types="starships"
          data={ starships }
          loading={ loading }
        />

        <Topic
          title="Planets"
          type="planet"
          types="planets"
          data={ planets }
          loading={ loading }
        />

        <Topic
          title="Vehicles"
          type="vehicle"
          types="vehicles"
          data={ vehicles }
          loading={ loading }
        />
      </div>
    </Layout>
  }
}

export default withData(Index)