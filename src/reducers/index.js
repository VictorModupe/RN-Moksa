import { combineReducers } from 'redux';
import AuthenticationReducer from './AuthenticationReducer';
import MainReducer from './MainReducer';
import SettingsReducer from './SettingsReducer';
import BeerMenuReducer from './BeerMenuReducer';
import FoodTrucksReducer from './FoodTrucksReducer';
import RestaurantsReducer from './RestaurantsReducer';
import EventsReducer from './EventsReducer';
import NotificationsReducer from './NotificationsReducer';

export default combineReducers({
  authentication : AuthenticationReducer,
  main : MainReducer,
  settings : SettingsReducer,
  beermenu : BeerMenuReducer,
  foodtrucks : FoodTrucksReducer,
  restaurants : RestaurantsReducer,
  events : EventsReducer,
  notifications : NotificationsReducer,
});
