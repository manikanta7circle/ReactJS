// Write your JS code here
import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <li> Home </li>
            <li> Products </li>
            <li> Cart </li>
          </ul>
          <button type="button" className="logout-desktop-button">
            Logout
          </button>
          <button type="button" className="logout-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="logout-icon"
            />
          </button>
          <ul className="nav-mobile-menu">
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
              />
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
              />
            </li>
            <li>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
              />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Header
