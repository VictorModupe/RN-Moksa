import {
  TOGGLE_ALL_ON,
  TOGGLE_ALL_OFF,
  TOGGLE_NOTIFICATION,
  RESTORE_SETTINGS,
  LOGOUT,
} from '../actions/types'

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTORE_SETTINGS:
      return { ...state, ...action.payload }
    case LOGOUT:
      return { ...INITIAL_STATE }
    default:
      return state
  }
}
