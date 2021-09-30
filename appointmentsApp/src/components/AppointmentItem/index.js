// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {title, date, isStarred, id} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  return (
    <li className="appointmentItem">
      <div className="top">
        <p className="title">{title}</p>
        <p className="date-para">Date: {formattedDate}</p>
      </div>
      <button
        className="icon-button"
        onClick={onClickStar}
        type="button"
        testid="star"
      >
        <img src={starImgUrl} alt="star" className="icon" />
      </button>
    </li>
  )
}

export default AppointmentItem
