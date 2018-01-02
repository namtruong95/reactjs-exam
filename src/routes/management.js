import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import async from './async'
import AuthenticatedRoute from './AuthenticatedRoute'

const AsyncBot = async(() => import('../components/management/bot'))
const AsyncProgress = async(() => import('../components/management/progress'))
const AsyncNotify = async(() => import('../components/management/notify'))
const AsyncCompanyUser = async(() => import('../components/management/company/user'))
const AsyncShortcut = async(() => import('../components/management/shortcut'))
const AsyncUserBlocked = async(() => import('../components/management/user/blocked'))

export default () => {
  return (
    <Switch>
      {/* authenticated */}

      <AuthenticatedRoute
        path="/setting/bots"
        exact
        component={AsyncBot}
      />

      <AuthenticatedRoute
        path="/setting/progress"
        exact
        component={AsyncProgress}
      />

      <AuthenticatedRoute
        path="/setting/notify"
        exact
        component={AsyncNotify}
      />

      <AuthenticatedRoute
        path="/setting/users"
        exact
        component={AsyncCompanyUser}
      />

      <AuthenticatedRoute
        path="/setting/short-cut"
        exact
        component={AsyncShortcut}
      />

      <AuthenticatedRoute
        path="/setting/users-blocked"
        exact
        component={AsyncUserBlocked}
      />

      {/* Finally, catch all unmatched routes */}
      <Route render={() => {
          return (
            <Redirect to="/setting/bots" />
          )
        }
      }
      />
    </Switch>
  )
}
