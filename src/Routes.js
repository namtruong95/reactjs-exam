import React from 'react'
import { Route, Switch } from 'react-router-dom'
import asyncComponent from './components/auth/AsyncComponent'
import AuthenticatedRoute from './components/auth/AuthenticatedRoute'
import UnauthenticatedRoute from './components/auth/UnauthenticatedRoute'

const AsyncHome = asyncComponent(() => import('./components/applications/Home'))
const AsyncLogin = asyncComponent(() => import('./components/applications/Login'))
const AsyncNotFound = asyncComponent(() => import('./components/applications/NotFound'))
const AsyncAuth = asyncComponent(() => import('./components/applications/Auth'))

export default () => {
  return (
    <Switch>
      <AuthenticatedRoute
        path='/'
        exact
        component={AsyncHome}
      />
      <UnauthenticatedRoute
        path='/login'
        exact
        component={AsyncLogin}
      />
      <AuthenticatedRoute
        path='/auth'
        exact
        component={AsyncAuth}
      />
      {/* Finally, catch all unmatched routes */}
      <Route component={AsyncNotFound} />
    </Switch>
  )
}


