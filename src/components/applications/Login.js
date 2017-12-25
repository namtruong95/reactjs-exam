import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/auth';

class Login extends Component {
  handleLogin = async (e) => {
    e.preventDefault()
    // this.props.state.auth.dispatch('login', { token: 11111 })
    const loginData = {
      login_id: 'neolab',
      password: 'Abcd@1234'
    }
    const loginResult = await login(loginData)
    if (loginResult.status === 200) {
      this.props.dispatch({
        type: 'login',
        token: loginResult.data.access_token,
        token_type: loginResult.data.token_type
      })

      this.props.history.push(this.querystring('redirect'))
    }
  }

  querystring(name, url = window.location.href) {
    name = name.replace(/[[]]/g, '\\$&')

    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i')
    const results = regex.exec(url)

    if (!results) {
      return null
    }
    if (!results[2]) {
      return ''
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '))
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

export default connect()(Login)
