import { EVENTS_MENU_LOADING, EVENTS_MENU_SUCCESS, EVENTS_MENU_FAIL, ERROR, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  eventsList : [],
  loading : false,
  total : 0,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action

  switch (type) {
    case EVENTS_MENU_LOADING:
      return { ...state, loading : true, error : undefined }
    case EVENTS_MENU_SUCCESS : 
      return { ...state, loading : false, error : undefined, eventsList : payload.results, total : payload.total }
    case EVENTS_MENU_FAIL:
    case ERROR:
      return { ...state, error : payload, loading : false };
    case LOGOUT:
      return { ...INITIAL_STATE }    
    default:
      return state;
  }
};

