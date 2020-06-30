export const displayNotification = (payload) => {
  return {
    type: 'SET_NOTIFICATION',
    payload,
  }
}

export const removeNotification = (payload) => {
  return {
    type: 'REMOVE_NOTIFICATION',
    payload,
  }
}
