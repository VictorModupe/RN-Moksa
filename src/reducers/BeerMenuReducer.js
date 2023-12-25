import { BEER_MENU_LOADING, BEER_MENU_SUCCESS, BEER_MENU_FAIL, ERROR, LOGOUT, BEER_MENU_SECTION, BEER_MENU_SECTION_BEERS, BEER_MENU_LOADING_END } from '../actions/types';

const INITIAL_STATE = {
  beerMenuList : [],
  seciontBeers: [],
  section : 0,
  total : 0,
};

export default (state = INITIAL_STATE, action) => {
  const { payload, type } = action

  switch (type) {
    case BEER_MENU_LOADING:
      return { ...state, loading : true, error : undefined }
    case BEER_MENU_SUCCESS : 
      return { ...state, loading : false, error : undefined, beerMenuList : payload.results, total : payload.total }
    case BEER_MENU_LOADING_END:
        return { ...state, loading : false };
    case BEER_MENU_FAIL:
    case ERROR:
      return { ...state, error : payload, loading : false };
    case BEER_MENU_SECTION:
      return { ...state, section : payload }
    case BEER_MENU_SECTION_BEERS:
       return { ...state, seciontBeers: payload }
    case LOGOUT:
      return { ...INITIAL_STATE }    
    default:
      return state;
  }
};

