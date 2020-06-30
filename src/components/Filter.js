import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import filterItems from '../actions/filterActions'

const Filter = () => {
  const [state, setState] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    e.preventDefault()
    const filterTerm = e.target.value
    setState(filterTerm)
  }

  dispatch(filterItems(state))

  const reset = () => {
    setState('')
  }

  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      Responsive Filter:
      <form>
        <input onChange={handleChange} />
        <button onClick={reset}>reset</button>
      </form>
    </div>
  )
}

export default Filter
