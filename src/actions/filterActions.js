const filterItems = (payload) => {
  return {
    type: 'SET_FILTER',
    payload,
  }
}

export default filterItems
