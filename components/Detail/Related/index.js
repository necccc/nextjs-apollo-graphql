import React from 'react'
import Link from '../../Link'
import { Button, ButtonSkeleton } from 'carbon-components-react';

import css from "./styles.scss"

const upperCase = (word) => {
  return word.slice(0,1).toUpperCase() + word.slice(1)
}

class DetailRelated extends React.Component {

  static getDerivedStateFromProps (props, state) {
    let newState = {}

    const { loading, data } = props

    if (!state) {
      newState = Object.assign({}, { loading, data })
    } else {
      newState = Object.assign({}, state, { loading, data: Array.from(new Set([ ...state.data, ...props.data ]))})
    }

    return newState
  }

  render () {
    const { data, loading } = this.state
    const { skip, title, type, total = data.length, loadMore = () => {} } = this.props

    return <div className="item-data details-related">
		  <h3 className="bx--type-gamma">{title}</h3>

      <ul>
        { data.map(related => (<li key={related.id}>
            <Link to={`/${type}/:id`} id={related.id}>
              <a className="related-image-link" style={{'backgroundImage': `url(${related.picture})` }}>
              </a></Link>
            <Link to={`/${type}/:id`} id={related.id}><a className="related-link">{related.name}</a></Link>
          </li>)
        )}
      </ul>

      { total > data.length ? (
         loading ? (
          <div className="details__load-more"><ButtonSkeleton small /></div>
        ) : (
          <Button small onClick={loadMore} className="details__load-more">
            Load more...
          </Button>
        )
      ) : '' }
    </div>
  }
}

export default DetailRelated