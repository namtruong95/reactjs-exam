import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import Routes from './routes'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
