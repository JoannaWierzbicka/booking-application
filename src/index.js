import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers/index'

// import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

import './index.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  // <Router basename={'/booking-application'}>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  // </Router>

  ,
  document.getElementById('root')
)
