// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandom = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: number})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="gen-button"
              onClick={this.getRandom}
            >
              Generate
            </button>
          </div>
          <h1 className="random-number">{randomNumber} </h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
