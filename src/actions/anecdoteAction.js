import anecdoteService from '../services/anecdotes'

export const addAnecdote = (payload) => {
  return {
    type: 'ADD_ANECDOTE',
    payload,
  }
}

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      payload: anecdotes,
    })
  }
}
