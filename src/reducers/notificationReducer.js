const notificationReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'SET_NOTIFICATION': {
      return { ...state, payload }
    }
    case 'REMOVE_NOTIFICATION': {
      setTimeout(() => {
        return { ...state, message: payload.message }
      }, 3000)
      return
    }
    default:
      return state
  }
}

export default notificationReducer
