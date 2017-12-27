import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
import queryString from '../utils/queryString'
import TextInput from './elements/TextInput'

class Login extends React.Component {

  constructor() {
    super()
    document.title = 'LOGIN page'

    this.handleLogin = this.handleLogin.bind(this)

    this.state = {
      login_id: 'neolab',
      password: 'Abcd@1234'
    }
  }

  async handleLogin(e) {
    e.preventDefault()
    if (this.refs.login_id.state.valid
      || this.refs.password.state.valid) {
      return
    }
    const loginData = {
      login_id: this.refs.login_id.state.value,
      password: this.refs.password.state.value
    }

    const loginResult = await login(loginData)
    if (loginResult.status === 200) {
      this.props.dispatch({
        type: 'login',
        token: loginResult.data.access_token,
        token_type: loginResult.data.token_type
      })

      this.props.history.push(queryString('redirect'))
    }
  }

  render() {
    return (
      <React.Fragment>
        <form className="ui form container">
          <h1>login page</h1>

          <TextInput
            type={'text'}
            label={'Login id'}
            value={this.state.login_id}
            required={true}
            maxLength={255}
            valid={true}
            ref={'login_id'}
          />

          <TextInput
            type={'password'}
            label={'Password'}
            value={this.state.password}
            required={true}
            maxLength={255}
            valid={true}
            ref={'password'}
          />

          <button onClick={this.handleLogin}
            className="ui button primary">
            Login
          </button>
        </form>
      </React.Fragment>
    )
  }
}

export default connect()(Login)
