import React from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter, Link} from 'react-router-dom'
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
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt=""/>
            </Link>
          </div>

          <div className="navbar">
            <ul className="ui horizontal">
              <NavLink className="link item" strict to="/zoomer" activeClassName="active">
                <span>Zoomer</span>
              </NavLink>
              <NavLink className="link item" strict to="/broadcasts" activeClassName="active">
                <span>Broadcasts</span>
              </NavLink>
              <NavLink className="link item" strict to="/users" activeClassName="active">
                <span>Users</span>
              </NavLink>
              <NavLink className="link item" strict to="/setting" activeClassName="active">
                <span>Setting</span>
              </NavLink>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(connect()(Header))
