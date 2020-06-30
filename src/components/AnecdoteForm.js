import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../actions/anecdoteAction'
import { displayNotification } from '../actions/notificationAction'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const newAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.item.value
    e.target.item.value = ''
    const newItem = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newItem))
    const notify = `Anecdote '${content}' was added with id ${newItem.id}`
    dispatch(displayNotification(notify, 10))
    setTimeout(() => dispatch(displayNotification('')), 3000)
  }

  return (
    <form onSubmit={newAnecdote}>
      <h3>
        <i> Add New Anecdote</i>
      </h3>
      <input name="item" />
      <button type="submit">add</button>
    </form>
  )
}

export default AnecdoteForm
