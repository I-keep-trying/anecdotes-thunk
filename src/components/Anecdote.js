import React from 'react'

const Anecdote = ({ a, onClick }) => {
  return (
    <li key={a.id}>
      {a.content}
      <button onClick={onClick}>vote</button> {a.votes} votes
    </li>
  )
}

export default Anecdote
