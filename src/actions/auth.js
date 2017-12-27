import Http from './api'
import store from '../store'

async function login(loginData) {
  return await Http.post('oauth/login', loginData)
}

async function getCurrentUser() {
  if (store.getState().credential.hasOwnProperty('token')) {
    const credential = store.getState().credential
    Http.defaults.headers.common.authorization = `${credential.token_type} ${credential.token}`

    return await Http.get('me')
  }
  return
}

export { login, getCurrentUser }
