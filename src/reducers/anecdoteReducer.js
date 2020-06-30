const anecdoteReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'INIT_ANECDOTES':
      return payload
    case 'ADD_ANECDOTE':
      const newAnecdote = {
        content: payload.content,
        id: payload.id,
        votes: payload.votes,
      }
      return [...state, newAnecdote]
    case 'VOTE': {
      
      const votedAnecdote = {
        ...payload,
        votes: payload.votes,
      }

      return state.map((a) => (a.id !== votedAnecdote.id ? a : votedAnecdote))
    }

    default:
      return state
  }
}

export default anecdoteReducer
