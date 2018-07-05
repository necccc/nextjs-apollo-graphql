import React from 'react'
import { SkeletonText } from 'carbon-components-react';
import DetailItem from '../Item'
import css from "./styles.scss"

class DetailList extends React.Component {
  render () {
    const { data, loading, exclude } = this.props

    return (loading ? (
      <SkeletonText lineCount={6} width="30%" paragraph />
    ) : Object.entries(data)
      .filter(([key]) => !exclude.includes(key))
      .map(([key, value]) => ( <DetailItem label={key} value={value} key={key} /> ))
    )
  }
}

export default DetailList