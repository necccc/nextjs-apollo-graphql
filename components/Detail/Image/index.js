import React from 'react'
import css from "./styles.scss"

class DetailImage extends React.Component {
  render () {
    const { picture, alt = '' } = this.props

    return <div className="item-image">
    { (!picture) ? (
      <div className="item-image-skeleton"></div>
    ) : (
      <img src={ picture } alt={ alt }/>
    )}
    </div>
  }
}

export default DetailImage