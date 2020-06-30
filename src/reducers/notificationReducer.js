const notificationReducer = (state = '', { type, payload }) => {
  console.log('notification reducer payload', payload)
  switch (type) {
    case 'SET_NOTIFICATION': {
      return { ...state, payload }
    }

    default:
      return state
  }
}

export default notificationReducer

//https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559