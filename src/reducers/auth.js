import {ActionTypes} from '../utils/ActionTypes'

const auth = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        credential: {
          token: action.token
        }
      }

    default:
      return state
  }
}

export default auth
