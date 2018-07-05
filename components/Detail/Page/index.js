import React from 'react'

import css from "./styles.scss"

class DetailPage extends React.Component {
  render () {
    const { children } = this.props

    return <div className="detail-page">
      { children }
    </div>
  }
}

export default DetailPage