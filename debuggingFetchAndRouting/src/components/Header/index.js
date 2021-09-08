import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="title">Wave</h1>
    </div>
    <div>
      <Link className="route-link" to="/">
        Home
      </Link>
      <Link className="route-link" to="/about">
        About
      </Link>
      <Link className="route-link" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
