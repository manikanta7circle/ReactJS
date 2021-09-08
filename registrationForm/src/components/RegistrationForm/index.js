// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isSuccess: false,
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
  }

  onSubmitAnother = () => {
    console.log('called')
    this.setState({
      isSuccess: false,
    })
  }

  onSubmitFrom = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName !== '' && lastName !== '') {
      this.setState({
        isSuccess: true,
      })
    } else {
      this.renderErrorFirstMsg()
      this.renderErrorLastMsg()
    }
  }

  renderErrorFirstMsg = () => {
    const {firstName} = this.state
    console.log('called')
    console.log(firstName)
    if (firstName === '') {
      this.setState({
        isFirstNameEmpty: true,
      })
    } else {
      this.setState({
        isFirstNameEmpty: false,
      })
    }
  }

  renderErrorLastMsg = () => {
    const {lastName} = this.state
    console.log('called')
    if (lastName === '') {
      this.setState({
        isLastNameEmpty: true,
      })
    } else {
      this.setState({
        isLastNameEmpty: false,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  renderLoginForm = () => {
    const {firstName, lastName, isFirstNameEmpty, isLastNameEmpty} = this.state
    return (
      <div className="form-container">
        <form className="input-container" onSubmit={this.onSubmitFrom}>
          <div className="username-container">
            <label className="label" htmlFor="username">
              FIRST NAME
            </label>
            <input
              type="text"
              className="input-text"
              id="username"
              placeholder="First name"
              onChange={this.onChangeFirstName}
              onBlur={this.renderErrorFirstMsg}
              value={firstName}
            />
            {isFirstNameEmpty && <p className="error-msg">Required</p>}
          </div>
          <div className="input-container">
            <label className="label" htmlFor="password">
              LAST NAME
            </label>
            <input
              type="text"
              className="input-text"
              id="password"
              placeholder="Last name"
              onChange={this.onChangeLastName}
              onBlur={this.renderErrorLastMsg}
              value={lastName}
            />
            {isLastNameEmpty && <p className="error-msg">Required</p>}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    )
  }

  renderSuccessCard = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-message">Submitted Successfully</p>
      <button
        className="submit-another-button"
        type="button"
        onClick={this.onSubmitAnother}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <div className="form-page-container">
        <h1 className="heading">Registration</h1>
        {isSuccess ? this.renderSuccessCard() : this.renderLoginForm()}
      </div>
    )
  }
}

export default RegistrationForm
