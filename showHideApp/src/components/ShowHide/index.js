// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  onFirst = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  onLast = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="button1">
              <button className="button" type="button" onClick={this.onFirst}>
                Show/Hide Firstname
              </button>
              {first ? (
                <div className="first">
                  <p className="name">Joe</p>
                </div>
              ) : null}
            </div>
            <div className="button1">
              <button className="button" type="button" onClick={this.onLast}>
                Show/Hide Lastname
              </button>
              {last ? (
                <div className="first">
                  <p className="name">Jonas</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
