import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'
import AppliedRoute from './AppliedRoute'

const AsyncContainer = async(() => import('../components/Container'))
const AsyncLogin = async(() => import('../components/Login'))

export default () => {
  return (
    <Switch>
      {/* unauthenticated */}
      <AppliedRoute
        path="/login"
        exact
        component={AsyncLogin}
      />
      {/* authenticated */}
      <AuthenticatedRoute
        path="/"
        component={AsyncContainer}
      />

      <Route render={() => (
          <Redirect to="/" />
        )}
      />

    </Switch>
  )
}
