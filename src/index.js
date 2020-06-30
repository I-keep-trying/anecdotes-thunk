import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

//counter
/* import App from './App1'
import store from './store' */

//anecdotes
import App from './App'
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
