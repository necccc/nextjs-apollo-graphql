import React from 'react'
import Link from '../../Link'
import css from "./styles.scss"

const upperCase = (word) => {
  return word.slice(0,1).toUpperCase() + word.slice(1)
}

class DetailItem extends React.Component {
  render () {
    const { label: rawLabel, value } = this.props
    const label = rawLabel.split('_').map(upperCase).join(' ')

    let displayedValue = value
    let linkTo = '';

    switch (rawLabel) {
      case 'homeworld':
        linkTo = 'planet';
        break;
      default:
        linkTo = rawLabel
    }

    if (value instanceof Array) {
      displayedValue = value.map(v => (<Link to={`/${linkTo}/:id`} id={v.id} key={v.id}><a>{ v.name }</a></Link>))
    } else if (typeof value === 'object') {

      if (!value.id) {
        displayedValue = 'n/a'
      } else {
        displayedValue = (<Link to={`/${linkTo}/:id`} id={value.id} key={value.id}><a>{ value.name }</a></Link>)
      }
    }

    return <p key={label}>
      <strong>{label}:</strong> {displayedValue}
    </p>
  }
}

export default DetailItem