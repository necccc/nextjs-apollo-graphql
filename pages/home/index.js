import React from 'react'
import Layout from '../../layouts/Default'
import Title from '../../components/Title'
import Topic from '../../components/Topic'

import state from './state'

class Index extends React.Component {
  render() {
    const { allPlanets, allVehicles, allPersons, allStarships, loading } = this.props

    return <Layout>
      
      <Title>
        Star Wars library
      </Title>

      <div className="bx--row">
        <Topic
          title="People"
          type="person"
          types="people"
          data={ allPersons }
          loading={ loading }
        />

        <Topic
          title="Starships"
          type="starship"
          types="starships"
          data={ allStarships }
          loading={ loading }
        />

        <Topic
          title="Planets"
          type="planet"
          types="planets"
          data={ allPlanets }
          loading={ loading }
        />

        <Topic
          title="Vehicles"
          type="vehicle"
          types="vehicles"
          data={ allVehicles }
          loading={ loading }
        />
      </div>
    </Layout>
  }
}

export default state(Index)