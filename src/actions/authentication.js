import axios from 'axios'; //client http lib
import {Keyboard} from 'react-native';
import {
LOGIN_USER,
LOGIN_USER_SUCCESS,
LOGOUT,
LOGIN_MODAL_CHANGED,
LOGIN_MODAL_HIDE,
SHOW_RESET_PASSWORD,
FORGOT_PASSWORD_MODAL,
NEED_AUTHENTICATION,
UPDATING_USER,
UPDATING_USER_SUCCESS,
DASHBOARD_CARDS_UPDATED,
CLIENT_CONFIG_RECEIVED,
} from './types';

import { setError, processException } from './errors';
import { Actions } from 'react-native-router-flux';
import { setValue, getValue } from '../utils/storage';
import env from '../../env';
import { switchToDrawer } from './main';
import { uploadFirebaseToken, loadNotifications, restoreMessages } from './notifications';
import { crashlytics, recordAutoLoginFailed } from '../errors/crashlyticsErrors';
import { sleep } from '../utils/utils';

const AUTHENTICATION_ENDPOINT = '/tokens.json';
const RESET_PASSWORD_ENDPOINT = '/v1/passwordreset';
const CLIENT_CONFIG_ENDPOINT = '/v1/gsmclientconfig';
const USERS_ENDPOINT = '/v1/gsmusers';
const FILES_ENDPOINT = '/v1/gsmfiles';
const FILES_ATTACH_ENDPOINT = '/v1/gsmfileattachedobjects';
const DASHBOARD_ENDPOINT = '/v1/moksaappdashboard';

const GET_USER_DETAILS = `${USERS_ENDPOINT}?getself=1`;


export const logout = () => {
  return async (dispatch) => {
    
    const data = { logout : 1 }
    await axios.put(USERS_ENDPOINT, data)
    
    await setValue('user', undefined)

    dispatch({ type : LOGOUT })

    axios.defaults.headers.common['Authorization'] = `${env.BASIC_AUTH}`

    Actions.login()
  }
}

export const updatePassword = (password, password_compare, toast) => {
  return async (dispatch) => {
    try {
      if(!password || !password_compare) {
        dispatch(setError(`Please enter a password and confirm password.`))
        return
      }

      if(password != password_compare) {
        dispatch(setError(`The Password you've entered does not match the Confirm Password.`))
        return
      }
      dispatch({ type : UPDATING_USER })

      const user = await submitUserUpdate({ password, password_compare })
      Keyboard.dismiss();
      if(user && typeof user == 'object') {
        dispatch({ type : UPDATING_USER_SUCCESS, payload : user })
        toast.show('Password Updated!', 250, () => {
          dispatch(switchToDrawer('settings'))
        });
      } else {
        dispatch(setError(user && typeof user == 'string' ? user : `An error occured while trying to update your password, please try again.`))  
      }
      
    } catch (error) {
      const { message, status } = processException(error, dispatch)
      
      dispatch(setError(message))
    }
  }
}

export const updateUser = (details, toast) => {
  return async (dispatch, getState) => {
    try {
      const { authentication } = getState()
      const { auth } = authentication
      
      dispatch({ type : UPDATING_USER })

      const user = await submitUserUpdate(details)
      if(user && typeof user == 'object') {
        await setValue('user', { user, auth })

        dispatch({ type : UPDATING_USER_SUCCESS, payload : user })
        toast.show('Changes Saved!', 250, () => {
          dispatch(switchToDrawer('settings'))
        });
      } else {
        dispatch(setError(user && typeof user == 'string' ? user : `An error occurred while trying to update your information, please try again.`))  
      }
      
    } catch (error) {
      const { message, status } = processException(error, dispatch)
      
      dispatch(setError(message))
    }
  }
}


export const updateAvatar = (name, uri, toast) => {
  return async (dispatch, getState) => {
    try {
      const { authentication } = getState()
      const { user, auth } = authentication
      const { id : userId, photo : originalPhoto } = user

      dispatch({ type : UPDATING_USER })
      const imageName = name && `${name}`.trim().length > 0 ? name : 'UserProfileImage.jpg'
      const meta_data = { 
          description : "Profile Image",
          title: imageName,
          is_image: 1,
          is_private:0,
          use_source_sets:0,
          ext:"jpg"
        }
      const { data : metaResponse } = await axios.post(FILES_ENDPOINT, meta_data)
      
      const { success : metaSuccess, object : metaObject } = metaResponse || {}
      if(!metaSuccess || ! metaObject) {
        return
      }

      const { upload_id } = metaObject
      
      const formData = new FormData();
      formData.append('file', { uri, name: imageName, type: 'image/jpg' })
      formData.append('type', "jpg")
      const { data : uploadResponse } = await axios.post(`${FILES_ENDPOINT}?upload_id=${upload_id}&type=jpg`, formData)
      const { success : uploadSuccess, object : uploadObject } = uploadResponse || {}
      
      if(!uploadSuccess || ! uploadObject) {
        return
      }

      const { id : file_id } = uploadObject


      if(originalPhoto && originalPhoto.id) {
        await axios.delete(`${FILES_ATTACH_ENDPOINT}?file_id=${originalPhoto.id}&attached_id=${userId}&attached_type=user`, attachData)
      }

      const attachData = {
        file_id,
        attached_id: userId,
        attached_type: "user",
        featured:1,
        sort_index:0
      }

      const { data : attachResponse } = await axios.post(FILES_ATTACH_ENDPOINT, attachData)
      const { success : attachSuccess, object : attachObject } = attachResponse || {}
      
      if(!attachSuccess) {
        return
      }
      
      const { data : userDetailsResponse } = await axios.get(`${GET_USER_DETAILS}&ts=${new Date().getTime()}`)
      const { object : updatedUser } = userDetailsResponse

      const updateAuthentication = { user : updatedUser, auth }
      await setValue('user', updateAuthentication)

      dispatch({ type : UPDATING_USER_SUCCESS, payload : updatedUser })
      toast.show('Changes Saved!', 250, () => {
        dispatch(switchToDrawer('settings'))
      });
      
    } catch (error) {
      const { message, status } = processException(error, dispatch)
      
      dispatch(setError(message))
    }
  }
}

const submitUserUpdate = async( update ) => {
  const { data } = await axios.put(USERS_ENDPOINT, update)
  const { success, message, object } = data || { }

  if(success) {
    return object
  }

  if(message) {
    return message
  }

  return undefined
}


export const loginUser = ({ email, password, fullname, updateName }) => {
  return async (dispatch, getStore) => {
    if (!email || !password) {
      dispatch(setError(`Please enter an email address and password`))
      return;
    }
    dispatch({ type : LOGIN_USER });

    post = {
      grant_type : 'password',
      username : email,
      password : password
    }
    try {
      
      const { data : authData } = await axios.post(AUTHENTICATION_ENDPOINT, post)
      const { access_token, token_type } = authData

      axios.defaults.headers.common['Authorization'] = `${token_type} ${access_token}`
      
      const { data } = await axios.get(`${GET_USER_DETAILS}&ts=${new Date().getTime()}`)
      const { object } = data

      const authentication = { user : object, auth : authData }


      if(updateName) {
        const updatedUser = await submitUserUpdate({ fullname })
        if(updatedUser && typeof updateUser == 'object') {
          authentication.user = updatedUser
        }
      }

      dispatch(loginModalHide())
      await sleep(250)
      
      await retrieveDashboard(dispatch, getStore)

      await setValue('user', authentication)
      
      crashlytics.setUserIdentifier(email)

      dispatch({ type : LOGIN_USER_SUCCESS, payload :  authentication })
      dispatch(uploadFirebaseToken())
      dispatch(loadNotifications())
      dispatch(restoreMessages())
      dispatch(loadClientConfig())
      Actions.authenticatedScreen()
    } catch (error) {
      console.log('error', error.message)
      const { message, status } = processException(error, dispatch)
      dispatch(setShowResetPassword(true))

      if(status == 401) {
        dispatch(setError(`Oh no! It looks like that email & password combination is incorrect.\n\nIf you've created an account at moksabrewing.com please use those credentials to login.`))
      } else {
        dispatch(setError(message))
      }
    }
  }
}

export const loadClientConfig = () => {
    return async (dispatch) => {

        const { data } = await axios.get(`${CLIENT_CONFIG_ENDPOINT}`)
        const { object } = data || { }
        dispatch({ type : CLIENT_CONFIG_RECEIVED, payload: object })
    }
}

export const autoLogin = () => {
  return async (dispatch, getStore) => {
    const storedAuthentication = await getValue('user', undefined)
    if(!storedAuthentication) {
      dispatch({ type : NEED_AUTHENTICATION })
      return
    }
    
    const { access_token, token_type } = storedAuthentication.auth
    axios.defaults.headers.common['Authorization'] = `${token_type} ${access_token}`
    
    const { data } = await axios.get(`${GET_USER_DETAILS}&ts=${new Date().getTime()}`)
    
    const { object, success } = data
    if(!success) {
      recordAutoLoginFailed(data)

      axios.defaults.headers.common['Authorization'] = env.BASIC_AUTH
      dispatch({ type : NEED_AUTHENTICATION })      
      return
    }

    await retrieveDashboard(dispatch, getStore)
    const authentication = { user : object, auth : storedAuthentication.auth }

    await setValue('user', authentication)
    crashlytics.setUserIdentifier(object.username)

    dispatch({ type : LOGIN_USER_SUCCESS, payload :  authentication })
    dispatch(uploadFirebaseToken())
    dispatch(loadNotifications())
    dispatch(restoreMessages())
    dispatch(loadClientConfig())
    
    Actions.authenticatedScreen()
  }
}


export const guestLogin = () => {
  return async (dispatch, getStore) => {
    await retrieveDashboard(dispatch, getStore)
    Actions.authenticatedScreen()
  }
}

export const createAccount = ({ fullname, email, password }) => {
  return async (dispatch) => {
    if (!fullname || !email || !password) {
      dispatch(setError(`Please enter your name, email address and password`))
      return;
    }

    dispatch({ type : LOGIN_USER });



    try {
      const accountData = { fullname, email, password, password_compare : password }
      const { data } = await axios.post(USERS_ENDPOINT, accountData)
      const { success, message : createMessage, errors } = data || { }
      const { fieldset } = errors || { }

      if(!success) {
        const message = createMessage || fieldset || "Unknown error occured while creating your account, please try again"

        dispatch(setError(message))
        return
      }

      dispatch(loginUser({ email, password, fullname, updateName : true }))

    } catch (error) {
      const { message, status } = processException(error, dispatch)
      dispatch(setError(message))
    }
  };
}

export const retrieveDashboard = async (dispatch, getStore) => {
    try {
      const { data } = await axios.get(DASHBOARD_ENDPOINT)
      const { results } = data || { }
      const { beer_dashboard : results_beer_dashboard, foodtrucks_dashboard : results_foodtrucks_dashboard, restaurants_dashboard : results_restaurants_dashboard, events_dashboard : results_events_dashboard } =  results || {}

      const { main } = getStore()
      const { cards } = main
      const { beer_dashboard : current_beer_dashboard, foodtrucks_dashboard : current_foodtrucks_dashboard, restaurants_dashboard : current_restaurants_dashboard, events_dashboard : current_events_dashboard } = cards
      const beer_dashboard = { ...current_beer_dashboard, ...(results_beer_dashboard || {})}
      const foodtrucks_dashboard = { ...current_foodtrucks_dashboard, ...(results_foodtrucks_dashboard || {})}
      const restaurants_dashboard = { ...current_restaurants_dashboard, ...(results_restaurants_dashboard || {})}
      const events_dashboard = { ...current_events_dashboard, ...(results_events_dashboard || {})}


      dispatch({ type : DASHBOARD_CARDS_UPDATED, payload : { beer_dashboard, foodtrucks_dashboard, restaurants_dashboard, events_dashboard} })
    } catch (error) {
      const { message, status } = processException(error, dispatch)
      dispatch(setError(message))
    }
}

export const resetPassword = ({ email }) => {
  return async (dispatch) => {
    if (!email) {
      dispatch(setError(`Please enter an email address`))
      return;
    }


    try {
      const payload = { username : email }
      const { data } = await axios.post(RESET_PASSWORD_ENDPOINT, payload)
      
      dispatch(setShowResetPassword(false))
      dispatch(setError(`An email has been sent to ${email} so you can reset your password`))

    } catch (error) {
      const { message, status } = processException(error, dispatch)
      dispatch(setError(message))
    }
  };
}

export const modalTypeChanged = (modalType) => {
  return async (dispatch) => {
    if(modalType == FORGOT_PASSWORD_MODAL) {
      dispatch(setShowResetPassword(false))
    }

    dispatch({ type : LOGIN_MODAL_CHANGED, payload : modalType })
  }
}


export const setShowResetPassword = (showResetPassword) => {
  return { type : SHOW_RESET_PASSWORD, payload : showResetPassword }
}


export const loginModalHide = () => {
  return { type : LOGIN_MODAL_HIDE }
}