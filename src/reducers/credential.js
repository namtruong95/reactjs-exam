import {ActionTypes} from '../utils/ActionTypes'

const credential = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        token: action.token,
        token_type: action.token_type
      }

    default:
      return state
  }
}

export default credential
