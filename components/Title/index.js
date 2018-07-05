import React from 'react'

import css from "./styles.scss"

class Title extends React.Component {
  render() {
    const { children } = this.props

    return <div className="bx--row">
      <div className="bx--col-lg-12">
        <h1 className="page-title">{ children }</h1>
      </div>
    </div>
  }
}
export default Title