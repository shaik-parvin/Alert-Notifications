// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="msg-container">
        <h1 className="msg-heading info">Info</h1>
        <p className="msg-para">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="msg-container">
        <h1 className="msg-heading warning">Warning</h1>
        <p className="msg-para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="msg-container">
        <h1 className="msg-heading error">Error</h1>
        <p className="msg-para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="msg-container">
        <h1 className="msg-heading success">Success</h1>
        <p className="msg-para">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  return (
    <div className="notification-container">
      <h1 className="heading">Alert Notifications</h1>
      {renderSuccessNotification()}
      {renderErrorNotification()}
      {renderWarningNotification()}
      {renderInfoNotification()}
    </div>
  )
}

export default AlertNotifications
