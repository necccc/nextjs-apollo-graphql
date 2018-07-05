import React from 'react'
import Header from '../../components/Header'
import { Footer } from 'carbon-components-react';

import Route from '../../components/Route'
import routing from '../../routing'
import css from "./styles.scss"

class Layout extends React.Component {

  render () {
    const { children } = this.props

    return <div>
      <Route.Provider value={routing()}>
          <Header />
          <main className="bx--grid">
            {children}
          </main>
          <Footer>
            This is an example app using Nextjs, Express, Apollo GraphQL and Carbon
          </Footer>
          </Route.Provider>
      </div>
  }
}



export default Layout