import {
  ERROR,
  LOGOUT,
  SHOW_PROFILE_MODAL,
  ORIENTATION_CHANGE,
  DRAWER_VIEW,
  DRAWER_OPEN_STATUS,
  MAIN_CARD_INDEX,
  UPDATING_USER,
  UPDATING_USER_SUCCESS,
  DASHBOARD_CARDS_UPDATED,
} from '../actions/types';
import BeerMenu from '../components/cards/BeerMenu';
import Events from '../components/cards/Events';
import Restaurants from '../components/cards/Restaurants';
import FoodTrucks from '../components/cards/FoodTrucks';

const INITIAL_STATE = {
  showProfile : false,
  orientation : '',
  drawerView : 'main',
  drawerOpen : false,
  loading : false,
  cardIndex : 0,
  cards : {
      "beer_dashboard": {
        "title": "10 Beers on Tap",
        "caption": "3 available in Crowlers",
        "image": "/assets/img/elements/element__stout--lg.jpg",
        "button_text": "See What&apos;s Available",
        fallbackSource: require('../assets/on_tap_card.png'),
        view : BeerMenu
    },
    "foodtrucks_dashboard": {
        "title": "Food Trucks",
        "caption": "",
        "image": "/assets/img/moksaapp_default_foodtruckdata_img",
        "button_text": "See the schedule",
        fallbackSource: require('../assets/food_truck_card.png'),
        view : FoodTrucks
    },
    "restaurants_dashboard": {
        "title": "Delivery Options",
        "caption": "12 options + two walkable",
        "image": "/assets/img/hero_food--taco--sm.jpg",
        "button_text": "Checkout The List",
        fallbackSource: require('../assets/restaurant_card.png'),
        view : Restaurants
    },
    "events_dashboard": {
        "title": "Events",
        "caption": "",
        "image": "/assets/img/elements/element__team--sm.jpg",
        "button_text": "but wait there&apos;s more",
        fallbackSource: require('../assets/events_card.png'),
        view : Events
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (action.type) {
    case DASHBOARD_CARDS_UPDATED:
      return { ...state, cards : { ...payload }}
    case UPDATING_USER:
      return { ...state, loading : true }
    case UPDATING_USER_SUCCESS : 
      return { ...state, loading : false, error : undefined }
    case ERROR:
      return { ...state, error : action.payload, loading : false };
    case ORIENTATION_CHANGE:
      return { ...state, orientation : action.payload }
    case SHOW_PROFILE_MODAL:
      return { ...state, showProfile : action.payload }
    case DRAWER_VIEW:
      return { ...state, drawerView : action.payload }
    case DRAWER_OPEN_STATUS : 
      return { ...state, drawerOpen : action.payload }
    case MAIN_CARD_INDEX:
      return { ...state, cardIndex : action.payload }
    case LOGOUT:
      return { ...INITIAL_STATE }    
    default:
      return state;
  }
};

