
import Http from './api'
import store from '../store'

async function getThreads() {
  if (store.getState().credential.hasOwnProperty('token')) {
    const credential = store.getState().credential
    Http.defaults.headers.common.authorization = `${credential.token_type} ${credential.token}`

    return await Http.get('threads')
  }
  return
}

export { getThreads }
