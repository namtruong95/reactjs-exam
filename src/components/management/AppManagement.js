import React from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import RoutesManagemenet from '../../routes/management'

class AppManagement extends React.Component {
  render() {
    return (
      <React.Fragment>

        <div className="ui secondary pointing menu">
          <NavLink className="item" to="/setting/bots" activeClassName="active" >
            Bots
          </NavLink>

          <NavLink className="item" to="/setting/progress" activeClassName="active" >
            progress
          </NavLink>

          <NavLink className="item" to="/setting/notify" activeClassName="active" >
            notify
          </NavLink>

          <NavLink className="item" to="/setting/users" activeClassName="active" >
            users
          </NavLink>

          <NavLink className="item" to="/setting/short-cut" activeClassName="active" >
            short-cut
          </NavLink>

          <NavLink className="item" to="/setting/users-blocked" activeClassName="active" >
            users-blocked
          </NavLink>
        </div>

        <RoutesManagemenet />
      </React.Fragment>
    )
  }
}

export default withRouter(AppManagement)
