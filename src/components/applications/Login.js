import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../../actions/auth';

class Login extends Component {
  handleLogin = async e => {
    e.preventDefault()
    // this.props.state.auth.dispatch('login', { token: 11111 })
    const loginData = {
      login_id: 'neolab',
      password: 'Abcd@1234'
    }
    this.props.dispatch(login(loginData))
    this.props.userHasAuthenticated(true);
  }

  render() {
    return (
      <div>
        <h1>login page</h1>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    )
  }
}

export default connect((state)=> {
  return { auth: state.auth }
})(Login)
