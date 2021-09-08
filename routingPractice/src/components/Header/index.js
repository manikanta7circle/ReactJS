// Write your JS code here
import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
              className="logo"
              alt="wave"
            />
            <h1 className="heading">Wave</h1>
          </div>
          <ul className="nav-links-container">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
