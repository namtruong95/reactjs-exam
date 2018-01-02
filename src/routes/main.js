import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'

const AsyncCompany = async(() => import('../components/chat/Company'))
const AsyncHistory = async(() => import('../components/chat/History'))
const AsyncThread = async(() => import('../components/chat/Thread'))

export default () => {
  return (
    <Switch>
      {/* authenticated */}

      <AuthenticatedRoute
        path="/company"
        exact
        component={AsyncCompany}
      />

      <AuthenticatedRoute
        path="/history"
        exact
        component={AsyncHistory}
      />

      <AuthenticatedRoute
        path="/thread"
        exact
        component={AsyncThread}
      />

      {/* Finally, catch all unmatched routes */}
      <Route render={() => (
        <Redirect to="/company" />
        )}
      />
    </Switch>
  )
}
