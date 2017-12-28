import React from 'react'
import {connect} from 'react-redux'

class Thread extends React.Component {
  render() {
    return (
      <React.Fragment>
        Thread
      </React.Fragment>
    )
  }
}

export default connect(function (state) {
  return {user: state.root.user}
})(Thread)
