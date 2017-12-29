import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'
import AppliedRoute from './AppliedRoute'

const AsyncChatContainer = async(() => import('../components/chat/Container'))
const AsyncLogin = async(() => import('../components/Login'))
const AsyncCompany = async(() => import('../components/management/company/Company'))

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
        path="/threads"
        component={AsyncChatContainer}
      />
      <AuthenticatedRoute
        path="/setting/company"
        exact
        component={AsyncCompany}
      />

      {/* Finally, catch all unmatched routes */}
      <Route render={() => (
        <Redirect to="/threads" />
        )}
      />
    </Switch>
  )
}
