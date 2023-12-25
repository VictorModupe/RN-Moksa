import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  ERROR,
  LOGOUT,
  SHOW_PROFILE_MODAL,
  LOGIN_MODAL,
  LOGIN_MODAL_CHANGED,
  LOGIN_MODAL_HIDE,
  SHOW_RESET_PASSWORD,
  NEED_AUTHENTICATION,
  UPDATING_USER_SUCCESS,
  CLIENT_CONFIG_RECEIVED,
} from '../actions/types';
import { act } from 'react-test-renderer';

const INITIAL_STATE = {
  email : '',
  password : '',
  error : '',
  loading : false,
  auth : {},
  user : { },
  clientConfig: { },
  authenticated : false,
  autoAuthenticating : true,
  showLoginModal : false,
  loginModalType : LOGIN_MODAL,
  showResetPassword : false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATING_USER_SUCCESS:
      return { ...state, user : action.payload }
    case NEED_AUTHENTICATION:
      return { ...state, autoAuthenticating : false, authenticated : false }
    case EMAIL_CHANGED:
      return { ...state, email : action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password : action.payload };
    case LOGIN_USER:
      return { ...state, error : '', loading : true };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, ...action.payload, authenticated : true , loading : false };
    case LOGIN_USER_FAILED:
    case ERROR:
      return { ...state, error : action.payload, password : '' , loading : false };
    case SHOW_PROFILE_MODAL:
      return { ...state, user : {...state.user, showProfile : action.payload }}
    case LOGIN_MODAL_CHANGED:
      return { ...state, loginModalType : action.payload, showLoginModal :true }
    case LOGIN_MODAL_HIDE:
      return { ...state, showLoginModal : false }
    case SHOW_RESET_PASSWORD:
      return { ...state, showResetPassword : action.payload }
    case CLIENT_CONFIG_RECEIVED:
      return { ...state, clientConfig: action.payload || {} }   
    case LOGOUT:
      return { ...INITIAL_STATE }
    default:
      return state;
  }
};

