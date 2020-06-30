const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'SET_FILTER':
      return { ...state, payload }
    default:
      return state
  }
}

export default filterReducer
