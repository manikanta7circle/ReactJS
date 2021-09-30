// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div>
      <div className="notification-container">{children}</div>
      <GrFormClose />
    </div>
  )
}
export default Notification
