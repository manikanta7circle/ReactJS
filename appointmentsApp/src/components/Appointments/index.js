// Write your code
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: '', isActive: false}

  onAdd = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title !== '' && date !== '') {
      const newAppointment = {
        id: uuidv4(),
        title,
        date,
        isStarred: false,
      }
      this.setState(prevState => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onStarred = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  getStarredList = () => {
    const {appointmentsList} = this.state
    const filteredList = appointmentsList.filter(
      each => each.isStarred === true,
    )
    return filteredList
  }

  toggleIsStarred = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  render() {
    const {appointmentsList, title, date, isActive} = this.state
    const buttonClass = isActive ? 'starred-button2' : 'starred-button1'
    const updatedAppointmentsList = isActive
      ? this.getStarredList()
      : appointmentsList
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="card">
            <form className="form-container" onSubmit={this.onAdd}>
              <div className="title-input-container">
                <label htmlFor="iLabel" className="label-text">
                  TITLE
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input"
                  id="iLabel"
                  value={title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="date-input-container">
                <label htmlFor="input-date" className="label-text">
                  DATE
                </label>
                <input
                  type="date"
                  className="input"
                  placeholder="dd/mm/yyyy"
                  id="input-date"
                  value={date}
                  onChange={this.onChangeDate}
                />
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <div className="bottom-container">
            <h1 className="h">Appointments</h1>
            <button
              type="button"
              className={buttonClass}
              onClick={this.onStarred}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-container">
            {updatedAppointmentsList.map(each => (
              <AppointmentItem
                key={each.id}
                appointmentDetails={each}
                toggleIsStarred={this.toggleIsStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
