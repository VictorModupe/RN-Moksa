import { FOOD_TRUCKS_MENU_LOADING, FOOD_TRUCKS_MENU_SUCCESS, FOOD_TRUCKS_MENU_FAIL, ERROR, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  foodTrucks : [],
  loading : false,
  total : 0,
  selectedSort : 0,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action

  switch (type) {
    case FOOD_TRUCKS_MENU_LOADING:
      return { ...state, loading : true, error : undefined }
    case FOOD_TRUCKS_MENU_SUCCESS : 
      return { ...state, loading : false, error : undefined, foodTrucks : payload.results, total : payload.total, selectedSort : payload.selectedSort }
    case FOOD_TRUCKS_MENU_FAIL:
    case ERROR:
      return { ...state, error : payload, loading : false };
    case LOGOUT:
      return { ...INITIAL_STATE }    
    default:
      return state;
  }
};

