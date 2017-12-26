import React from 'react'
import { Route, Switch } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'
import UnauthenticatedRoute from './UnauthenticatedRoute'

const AsyncHome = async(() => import('../components/Home'))
const AsyncLogin = async(() => import('../components/Login'))
const AsyncNotFound = async(() => import('../components/NotFound'))

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
      {/* Finally, catch all unmatched routes */}
      <Route component={AsyncNotFound} />
    </Switch>
  )
}
