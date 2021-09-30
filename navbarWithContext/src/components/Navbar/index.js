// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const LogoLightImage =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
const LogoDarkImage =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
const ThemeLightImage =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
const ThemeDarkImage =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const NavbarClass = isDarkTheme ? 'nav-dark' : 'nav-light'
      const LinkClass = isDarkTheme ? 'link-dark' : 'link-light'
      const onClickThemeChange = () => toggleTheme()
      return (
        <div className={NavbarClass}>
          <img
            src={isDarkTheme ? LogoDarkImage : LogoLightImage}
            alt="website logo"
            className="website-logo"
          />
          <ul className="links-container">
            <Link to="/" className="link-nav">
              <li className={LinkClass}> Home </li>
            </Link>
            <Link to="/about" className="link-nav">
              <li className={LinkClass}>About</li>
            </Link>
          </ul>
          <button
            className="theme-button"
            testid="theme"
            type="button"
            onClick={onClickThemeChange}
          >
            <img
              src={isDarkTheme ? ThemeLightImage : ThemeDarkImage}
              alt="theme"
              className="theme-logo"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
