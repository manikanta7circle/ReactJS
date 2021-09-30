import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="main-container">
      <Header />
      <div className="Home-page-container">
        <div className="home-container">
          <h1 className="home-page-heading">
            Find The Job That Fits Your Life
          </h1>
          <p className="home-page-description">
            Millions of people are searching for jobs, salary information,
            company reviews. Find job that fits your abilities and potential.
          </p>
          <Link to="/jobs" className="link-item">
            <button className="find-jobs-button" type="button">
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
