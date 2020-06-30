const anecdoteReducer = (state = [], { type, payload }) => {
  console.log('reducer payload', payload)
  switch (type) {
    case 'INIT_ANECDOTES':
      return payload
    case 'ADD_ANECDOTE':
      const newAnecdote = {
        content: payload.content,
        id: payload.id,
        votes: payload.votes,
      }
      console.log('reducer newAnecdote', newAnecdote)
      return [...state, newAnecdote]
    case 'VOTE': {
      const id = payload

      const selectedAnecdote = state.find((n) => n.id === id)

      const votedAnecdote = {
        ...selectedAnecdote,
        votes: selectedAnecdote.votes + 1,
      }

      return state.map((a) => (a.id !== id ? a : votedAnecdote))
    }

    default:
      return state
  }
}

export default anecdoteReducer
