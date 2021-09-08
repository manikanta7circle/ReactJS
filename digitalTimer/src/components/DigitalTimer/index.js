// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
  isTimerRunning: false,
  timeElapsedInSeconds: 0,
  timeLimitInMinutes: 25,
}

class DigitalTimer extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  onTimeLimitDecrement = () => {
    const {timeLimitInMinutes} = this.state

    if (timeLimitInMinutes > 1) {
      this.setState(prevState => ({
        timeLimitInMinutes: prevState.timeLimitInMinutes - 1,
      }))
    }
  }

  onTimeLimitIncrement = () => {
    this.setState(prevState => ({
      timeLimitInMinutes: prevState.timeLimitInMinutes + 1,
    }))
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  incrementTimeElapsedSeconds = () => {
    const {timeElapsedInSeconds, timeLimitInMinutes} = this.state
    const isTimerCompleted = timeElapsedInSeconds === timeLimitInMinutes * 60

    if (isTimerCompleted) {
      this.clearTimeInterval()
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    }
  }

  onStartOrPause = () => {
    const {
      isTimerRunning,
      timeElapsedInSeconds,
      timeLimitInMinutes,
    } = this.state
    const isTimerCompleted = timeElapsedInSeconds === timeLimitInMinutes * 60

    if (isTimerCompleted) {
      this.setState({timeElapsedInSeconds: 0})
    }

    if (isTimerRunning) {
      this.clearTimeInterval()
    } else {
      this.intervalId = setInterval(this.incrementTimeElapsedSeconds, 1000)
    }

    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  onReset = () => {
    this.clearTimeInterval()
    this.setState(initialState)
  }

  getResultTime = () => {
    const {timeElapsedInSeconds, timeLimitInMinutes} = this.state
    const totalSeconds = timeLimitInMinutes * 60 - timeElapsedInSeconds

    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.floor(totalSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  renderTimerLimitSection = () => {
    const {timeLimitInMinutes, timeElapsedInSeconds} = this.state
    const isButtonDisabled = timeElapsedInSeconds > 0

    return (
      <div className="timer-limit-controller-section">
        <p className="limit-label"> Set timer Limit</p>
        <div className="timer-limit-controller">
          <button
            className="limit-controller-button"
            type="button"
            onClick={this.onTimeLimitDecrement}
            disabled={isButtonDisabled}
          >
            -
          </button>
          <div className="limit-value-container">
            <p className="limit-value">{timeLimitInMinutes}</p>
          </div>
          <button
            className="limit-controller-button"
            type="button"
            onClick={this.onTimeLimitIncrement}
            disabled={isButtonDisabled}
          >
            +
          </button>
        </div>
      </div>
    )
  }

  renderControlButtons = () => {
    const {isTimerRunning} = this.state
    const buttonImageUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const buttonImageAltText = isTimerRunning ? 'pause icon' : 'play icon'

    return (
      <div className="timer-controller-section">
        <button
          type="button"
          className="timer-control-button"
          onClick={this.onStartOrPause}
        >
          <img
            src={buttonImageUrl}
            alt={buttonImageAltText}
            className="timer-control-icon"
          />
          <p className="timer-control-label">
            {isTimerRunning ? 'Pause' : 'Start'}
          </p>
        </button>
        <button
          type="button"
          className="timer-control-button"
          onClick={this.onReset}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
            alt="reset icon"
            className="timer-control-icon"
          />
          <p className="timer-control-label">Reset</p>
        </button>
      </div>
    )
  }

  render() {
    const {isTimerRunning} = this.state
    const labelText = isTimerRunning ? 'Running' : 'Paused'
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="main-container">
          <div className="time-display-section">
            <div className="elapsed-time-container">
              <h1 className="elapsed-time">{this.getResultTime()}</h1>
              <p className="timer-status">{labelText}</p>
            </div>
          </div>
          <div className="control-section">
            {this.renderControlButtons()}
            {this.renderTimerLimitSection()}
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
