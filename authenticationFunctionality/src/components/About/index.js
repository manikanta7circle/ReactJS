// Write your JS code here
import {Component} from 'react'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="about-page">
          <h1 className="heading">About Route</h1>
        </div>
        <LogoutButton />
      </>
    )
  }
}

export default About
