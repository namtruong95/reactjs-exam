import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import App from './App'

import registerServiceWorker from './registerServiceWorker'

let store = createStore(reducers)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
