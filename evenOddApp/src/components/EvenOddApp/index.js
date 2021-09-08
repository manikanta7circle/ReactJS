// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, text: 'Even'}

  onIncrement = () => {
    const {number} = this.state
    const value = Math.ceil(Math.random() * 100)
    const prevNum = number + value
    this.setState(prevState => ({number: prevState.number + value}))
    if (prevNum % 2 === 0) {
      this.setState({text: 'Even'})
    } else {
      this.setState({text: 'Odd'})
    }
  }

  render() {
    const {number, text} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Count {number}</h1>
          <p className="result"> Count is {text}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
