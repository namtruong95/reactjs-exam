import React from 'react'
import {connect} from 'react-redux'

class Thread extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <React.Fragment>
        <h1>Thread</h1>
      </React.Fragment>
    )
  }
}

export default connect()(Thread)
