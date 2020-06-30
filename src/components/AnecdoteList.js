import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../actions/voteAction'
import { displayNotification } from '../actions/notificationAction'
import filterItems from '../actions/filterActions'
import Anecdote from './Anecdote'
import AnecdoteForm from './AnecdoteForm'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const filterState = useSelector((state) => state.filter.payload)
  const dispatch = useDispatch()

  let filteredAnecdotes =
    filterState.length === 0
      ? anecdotes
      : anecdotes.filter((a) => {
          return a.content.toLowerCase().includes(filterState.toLowerCase())
        })

  const sortedAnecdotes =
    filterState.length === 0
      ? anecdotes.sort((a, b) => {
          return b.votes - a.votes
        })
      : filteredAnecdotes.sort((a, b) => {
          return b.votes - a.votes
        })

  const handleVote = async (id) => {
    const anecdote = sortedAnecdotes.find((a) => a.id === id)
    const vote = await anecdoteService.voteService(anecdote)
    dispatch(addVote(vote))
    dispatch(displayNotification(`you voted for " ${anecdote.content} " `))
    setTimeout(() => dispatch(displayNotification('')), 3000)
  }

  const handleFilterChange = (e) => {
    e.preventDefault()
    const filterTerm = e.target.filter.value
    dispatch(filterItems(filterTerm))
    e.target.filter.value = ''
  }

  const handleReset = () => {
    return (filteredAnecdotes = anecdotes)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <form onSubmit={handleFilterChange}>
        Filter on 'submit':
        <input name="filter" />
        <button type="submit">search</button>
        <button onClick={handleReset}>reset</button>
      </form>
      <hr />
      Add New Anecdote:
      <AnecdoteForm anecdotes={anecdotes} />
      <hr />
      <ul>
        {sortedAnecdotes.map((a) => (
          <Anecdote key={a.id} a={a} onClick={() => handleVote(a.id)} />
        ))}
      </ul>
    </div>
  )
}

export default AnecdoteList
