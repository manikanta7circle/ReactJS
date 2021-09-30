// Write your JS code here
import {Component} from 'react'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="Home-page">
          <h1 className="heading">Home Route</h1>
        </div>
        <LogoutButton />
      </>
    )
  }
}
export default Home
