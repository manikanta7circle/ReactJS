import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <div className="header-container">
        <Link to="/" className="link-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-logo"
          />
        </Link>
        <ul className="nav-links-sm-container">
          <Link to="/" className="link-item">
            <li className="nav-sm-icons">
              <AiFillHome className="icon" />
            </li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="nav-sm-icons">
              <BsFillBriefcaseFill className="icon" />
            </li>
          </Link>
          <li className="nav-sm-icons">
            <button
              className="logout-sm-button"
              type="button"
              onClick={this.onClickLogout}
            >
              <FiLogOut className="icon" />
            </button>
          </li>
        </ul>
        <ul className="nav-links-container">
          <Link to="/" className="link-item">
            <li className="nav-link-item">Home</li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="nav-link-item">Jobs</li>
          </Link>
        </ul>
        <button
          className="logout-button"
          type="button"
          onClick={this.onClickLogout}
        >
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(Header)
