// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="nav-link">
          <li>About</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
