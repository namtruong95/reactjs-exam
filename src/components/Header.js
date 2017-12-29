import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getCurrentUser} from '../actions/auth'

import logo from '../assets/images/calling_logo.svg'

class Header extends React.Component {
  async componentDidMount() {

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

      </React.Fragment>
    )
  }
}

export default connect(function (state) {
  return {user: state.root.user}
})(Header)
