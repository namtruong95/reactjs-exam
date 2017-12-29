import React from 'react'
import {connect} from 'react-redux'

class History extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>History</h1>
      </React.Fragment>
    )
  }
}

export default connect()(History)
