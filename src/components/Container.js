import React from 'react'

import Header from './Header'
import RoutesMain from '../routes/main'

class Container extends React.Component {
  render() {
    return (
      <React.Fragment>
          {/* <Header /> */}
          <Header />

          <RoutesMain />
      </React.Fragment>
    )
  }
}

export default Container
