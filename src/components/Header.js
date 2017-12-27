import React from 'react'
import {connect} from 'react-redux'
import {getCurrentUser} from '../actions/auth'

class Header extends React.Component {
  async componentWillMount() {
    const result = await getCurrentUser();

    if (result.status === 200) {
      this.props.dispatch({
        type: 'current:user',
        user: result.data
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        HEADER
      </React.Fragment>
    )
  }
}

export default connect(function (state) {
  return {user: state.root.user}
})(Header)
