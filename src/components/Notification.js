import React from 'react'
import { useSelector } from 'react-redux'

const Notification = (props) => {
  const notification = useSelector((state) => state.notifications.payload)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  if (notification && notification.length === 0) {
    return <div></div>
  } else if (notification === '' || notification === undefined) {
    return <div></div>
  } else {
    return <div style={style}>{notification}</div>
  }
}

export default Notification
