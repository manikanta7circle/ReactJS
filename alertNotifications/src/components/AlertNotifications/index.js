// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotifications = () => (
  <div className="main-container">
    <h1 className="heading">Alert Notifications</h1>
    <Notification>
      <AiFillCheckCircle />
      <div className="notification-sub-container">
        <h1 className="notification-status">Success</h1>
        <p className="notification-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
    <Notification>
      <RiErrorWarningFill />
      <div className="notification-sub-container">
        <h1 className="notification-status">Error</h1>
        <p className="notification-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification>
      <MdWarning />
      <div className="notification-sub-container">
        <h1 className="notification-status">Warning</h1>
        <p className="notification-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification>
      <MdInfo />
      <div className="notification-sub-container">
        <h1 className="notification-status">Info</h1>
        <p className="notification-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
