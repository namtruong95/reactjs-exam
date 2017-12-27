import {ActionTypes} from '../utils/ActionTypes'

const global = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.CURRENT_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
}

export default global
