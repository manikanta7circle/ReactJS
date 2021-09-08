// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogIn: false}

  onButton = () => {
    this.setState(prevState => ({isLogIn: !prevState.isLogIn}))
  }

  render() {
    const {isLogIn} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <Message isLogIn={isLogIn} />
          {isLogIn ? (
            <Logout onClickButton={this.onButton} />
          ) : (
            <Login onClickButton={this.onButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
