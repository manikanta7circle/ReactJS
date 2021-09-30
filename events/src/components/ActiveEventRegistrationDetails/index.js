// Write your code here
import {Component} from 'react'

import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderYetToRegisterDetails = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="status-image"
      />
      <p className="status-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art from.
      </p>
      <button className="register-button" type="button">
        Register Here
      </button>
    </>
  )

  renderRegisteredDetails = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="status-image"
      />
      <h1 className="registered-Description">
        You have already registered for the event
      </h1>
    </>
  )

  renderRegistrationClosedDetails = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="status-image"
      />
      <h1 className="registration-closed-status">
        Registrations Are Closed Now!
      </h1>
      <p className="closed-description">Stay tuned. We will reopen</p>
      <p>the registrations soon!</p>
    </>
  )

  renderInitialDetails = () => (
    <>
      <p className="initial-status">
        Click on an event, to view its registration details
      </p>
    </>
  )

  renderEventDetails = () => {
    const {registrationStatus} = this.props
    console.log(registrationStatus)

    switch (registrationStatus) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterDetails()
      case 'REGISTERED':
        return this.renderRegisteredDetails()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedDetails()
      case 'INITIAL':
        return this.renderInitialDetails()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="registration-details-container">
        {this.renderEventDetails()}
      </div>
    )
  }
}

export default ActiveEventRegistrationDetails
