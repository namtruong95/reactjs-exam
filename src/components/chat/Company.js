import React from 'react'
import {connect} from 'react-redux'

class Company extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Company</h1>
      </React.Fragment>
    )
  }
}

export default connect()(Company)
