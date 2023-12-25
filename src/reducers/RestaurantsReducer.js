import { RESTAURANTS_MENU_LOADING, RESTAURANTS_MENU_SUCCESS, RESTAURANTS_MENU_FAIL, ERROR, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  restaurantList : [],
  loading : false,
  total : 0,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action

  switch (type) {
    case RESTAURANTS_MENU_LOADING:
      return { ...state, loading : true, error : undefined }
    case RESTAURANTS_MENU_SUCCESS : 
      return { ...state, loading : false, error : undefined, restaurantList : payload.results, total : payload.total }
    case RESTAURANTS_MENU_FAIL:
    case ERROR:
      return { ...state, error : payload, loading : false };
    case LOGOUT:
      return { ...INITIAL_STATE }    
    default:
      return state;
  }
};

