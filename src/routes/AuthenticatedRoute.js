import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import fetchToken from './fetchToken'
import store from '../store'

export default ({ component: C, ...rest }) => {
  const action = fetchToken()
  if (action) {
    store.dispatch(action)
  }

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
