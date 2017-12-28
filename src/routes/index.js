import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'
import AppliedRoute from './AppliedRoute'

const AsyncHome = async(() => import('../components/Home'))
const AsyncLogin = async(() => import('../components/Login'))
const AsyncCompany = async(() => import('../components/company/Company'))

export default () => {
  return (
    <Switch>
      {/* unauthenticated */}
      <AppliedRoute
        path='/login'
        exact
        component={AsyncLogin}
      />
      {/* authenticated */}
      <AuthenticatedRoute
        path='/threads'
        component={AsyncHome}
      />
      <AuthenticatedRoute
        exact
        path='/setting/company'
        component={AsyncCompany}
      />
      <Redirect from="/" to="/threads" />
      {/* Finally, catch all unmatched routes */}
      <Route render={() => (
        <Redirect to="/threads" />
        )}
      />
    </Switch>
  )
}
