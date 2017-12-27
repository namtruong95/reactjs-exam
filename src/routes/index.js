import React from 'react'
import { Route, Switch } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'
import UnauthenticatedRoute from './UnauthenticatedRoute'

const AsyncHome = async(() => import('../components/Home'))
const AsyncLogin = async(() => import('../components/Login'))
const AsyncNotFound = async(() => import('../components/NotFound'))
const AsyncCompany = async(() => import('../components/company/Company'))

export default () => {
  return (
    <Switch>
      {/* unauthenticated */}
      <UnauthenticatedRoute
        path='/login'
        exact
        component={AsyncLogin}
      />
      {/* authenticated */}
      <AuthenticatedRoute
        path='/'
        exact
        component={AsyncHome}
      />
      <AuthenticatedRoute
        path='/setting/company'
        exact
        component={AsyncCompany}
      />
      {/* Finally, catch all unmatched routes */}
      <Route component={AsyncNotFound} />
    </Switch>
  )
}
