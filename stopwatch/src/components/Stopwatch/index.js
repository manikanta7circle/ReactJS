// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  increaseTimeInSeconds = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  onStart = () => {
    this.intervalId = setInterval(this.increaseTimeInSeconds, 1000)
  }

  onStop = () => {
    this.clearTimeInterval()
  }

  onReset = () => {
    this.clearTimeInterval()
    this.setState({timeInSeconds: 0})
  }

  getTime = () => {
    const {timeInSeconds} = this.state

    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading"> Stopwatch</h1>
          <div className="timer-main-container">
            <div className="time-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="timer"
                className="timer-icon"
              />
              <p className="timer-label"> Timer</p>
            </div>
            <h1 className="time" testid="timer">
              {this.getTime()}
            </h1>
            <div className="time-control-section">
              <button
                className="start-button button"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="stop-button button"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="reset-button button"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
