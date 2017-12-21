import {ActionTypes} from '../utils/ActionTypes'

export function login(loginData) {
  // console.log(loginData, 'call api')
  return { type: ActionTypes.LOGIN, token: '111111' }
}
