import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import store from '../../store'

export default ({ component: C, ...rest }) => {
  const isAuth = store.getState().credential.hasOwnProperty('token')

  return (
    <Route
      {...rest}
      render={props =>
        isAuth
          ? <C {...props} />
          : <Redirect
              to={`/login?redirect=${props.location.pathname}${props.location.search}`}
            />}
    />
  )
}
