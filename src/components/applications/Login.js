import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: ''
    };
  }

  handleLogin = async e => {
    e.preventDefault();
    console.log(this.props,1111)
    // this.props.isAuthenticated = true;
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h1>login page</h1>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
