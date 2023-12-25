import {
  TOGGLE_NOTIFICATION,
  UPDATE_MESSAGES,
  LOGOUT,
  PROCESSING_TOPIC,
  PROCESSING_SUB_TOPIC,
  OPENED_NOTIFICATION,
  CLEAR_OPENED_NOTIFICATION,
} from '../actions/types'

const INITIAL_NOTIFICATION_STATE = {
  messageUserStatus : false,
  comingSoon : false,
  newReleases : false,
  events : false,
  foodTrucks : false,
  member : false,
  advocator : false,
  messages: [],
  processingTopic: undefined
}

const INITIAL_STATE = {
  ...INITIAL_NOTIFICATION_STATE,
}

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action

  switch (type) {
    case PROCESSING_TOPIC:
      return {...state, processingTopic: payload }
    case PROCESSING_SUB_TOPIC:
      return {...state, processingSubTopic: payload }
    case TOGGLE_NOTIFICATION:
      return {...state, [payload.topic] :  payload.value }
    case UPDATE_MESSAGES:
      return { ...state, messages: [...payload] }
    case OPENED_NOTIFICATION:
      return { ...state, openedMessage: payload }
    case CLEAR_OPENED_NOTIFICATION:
      return { ...state, openedMessage: undefined }
    case LOGOUT:
      return { ...INITIAL_STATE }
    default:
      return state
  }
}
