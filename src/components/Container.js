import React from 'react'

import {withRouter, NavLink} from 'react-router-dom'
import RoutesMain from '../routes/main'

// import Header from './Header'
import logo from '../assets/images/calling_logo.svg'

class Container extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <React.Fragment>
          {/* <Header /> */}
          <div className="header">
            <div className="logo">
              <img src={logo} alt=""/>
            </div>

            <div className="navbar">
              <ul className="ui horizontal">
                <NavLink className="link item" strict to="/company" activeClassName="active">
                  <span>Company</span>
                </NavLink>
                <NavLink className="link item" strict to="/history" activeClassName="active">
                  <span>history</span>
                </NavLink>
                <NavLink className="link item" strict to="/thread" activeClassName="active">
                  <span>thread</span>
                </NavLink>
              </ul>
            </div>
          </div>

          <RoutesMain />
      </React.Fragment>
    )
  }
}

export default withRouter(Container)
