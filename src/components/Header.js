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
        <div className="header">
          <div className="logo">
            <img src={logo} alt=""/>
          </div>

          <div className="navbar">
            <ul className="ui horizontal">
              <NavLink strict className="item link" activeClassName="active" to="/threads">
                <span>Users</span>
              </NavLink>

              <NavLink strict className="item link" activeClassName="active" to="/setting/company">
                <span>Setting</span>
              </NavLink>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(function (state) {
  return {user: state.root.user}
})(Header)
