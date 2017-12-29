import React from 'react'
import RoutesV from '../routes/routes.v4'

import {withRouter, NavLink} from 'react-router-dom'


class Container extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Container</h1>
          <NavLink strict to="/company" activeClassName="active">Company</NavLink>
          <NavLink strict to="/history" activeClassName="active">history</NavLink>
          <NavLink strict to="/thread" activeClassName="active">thread</NavLink>

          <hr/>

          <RoutesV />
      </React.Fragment>
    )
  }
}

export default withRouter(Container)
