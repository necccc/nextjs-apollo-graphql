import React from 'react'
import Link from '../Link'
import css from "./styles.scss"

class Header extends React.Component {

  render() {
    return <header className="header">

      <nav className="nav bx--grid">
        <ul className="bx--row">
        <li className="bx--col-lg-1">
            <Link to="index">
              <a className="navLink">Home</a>
            </Link>
          </li>
          <li className="bx--col-lg-1">
              <a className="navLink">API</a>
          </li>
          <li className="bx--col-lg-1">
            <Link to="about">
              <a className="navLink">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  }
}
export default Header