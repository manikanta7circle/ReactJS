// Write your code here

import './index.css'

const EventItem = props => {
  const {eventData, getStatus, isActive} = props
  const {imageUrl, name, location, registrationStatus, id} = eventData

  const onEventImage = () => {
    getStatus(registrationStatus, id)
  }

  const buttonClass = isActive ? 'image-a-button' : 'image-button'

  return (
    <li className="event-item">
      <button className={buttonClass} type="button" onClick={onEventImage}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
