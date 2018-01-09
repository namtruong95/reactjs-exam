import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'

const AsyncAppChat = async(() => import('../components/chat/AppChat'))
const AsyncAppManagement = async(() => import('../components/management/AppManagement'))
const AsyncUser = async(() => import('../components/management/user'))
const AsyncBroadcast = async(() => import('../components/management/broadcast'))
const AsyncZoomer = async(() => import('../components/zoomer'))

export default () => {
  return (
    <Switch>
      {/* authenticated */}

      <AuthenticatedRoute
        path="/setting"
        component={AsyncAppManagement}
      />

      <AuthenticatedRoute
        path="/broadcasts"
        exact
        component={AsyncBroadcast}
      />

      <AuthenticatedRoute
        path="/users"
        exact
        component={AsyncUser}
      />

      <AuthenticatedRoute
        path="/threads"
        exact
        component={AsyncAppChat}
      />

      <AuthenticatedRoute
        path="/zoomer"
        exact
        component={AsyncZoomer}
      />

      {/* Finally, catch all unmatched routes */}
      <Route render={() => (
        <Redirect to="/threads" />
        )}
      />
    </Switch>
  )
}
