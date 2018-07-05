import React from 'react'
import Link from '../Link'

import { Button, ButtonSkeleton } from 'carbon-components-react';

import css from "./styles.scss"

class Topic extends React.Component {
  render () {
    const { loading, types, type, title, data = [] } = this.props

  return <div className="bx--col-lg-3">
      <div className="topic">
        <h2 className="bx--type-beta">{ title }</h2>
        <ul className="topic-list">
          { data.map( item => {
            return <li key={`${item.id}`} className="topic-list-item">
              <Link to={`/${type}/:id`} id={item.id}>
                <a>{item.name}</a>
              </Link>
            </li>
          })}
        </ul>

        { loading ? <ButtonSkeleton small /> : <Link to={`/${types}`}>
          <Button small >
            See all
          </Button>
        </Link> }

      </div>
    </div>
  }
}

export default Topic