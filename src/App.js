import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import Routes from './routes'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
