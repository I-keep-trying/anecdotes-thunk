import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './actions/anecdoteAction'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
   </div>
  )
}

export default App