import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import RoutesApp from './routes/app'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RoutesApp />
      </React.Fragment>
    )
  }
}

export default withRouter(App)
