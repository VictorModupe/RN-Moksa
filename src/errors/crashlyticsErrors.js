import firebase from 'react-native-firebase';
import { AUTO_LOGIN_FAILED, REPORTING_API_ERROR_FAILED, REPORTING_ERROR_FAILED } from './errorCodes';

export const crashlytics = firebase.crashlytics()

export const recordAutoLoginFailed = (response) => {
    return async (dispatch) => {
        dispatch(recordError(AUTO_LOGIN_FAILED, 'Auto authentication failed', response))
    }
}

export const recordApiError = (errorCode, message, data, exception) => {
    return async (dispatch) => {
      try {
          crashlytics.setStringValue("api_data", JSON.stringify(data));
          dispatch(recordError(errorCode, message, exception))
      } catch (e) {
          recordError(REPORTING_API_ERROR_FAILED, 'Error sending up error', e)
      }
    }
  }

export const recordError = (errorCode, message, data) => {
  return async (dispatch, getStore) => {
    const store = getStore()
    
    try {     
        crashlytics.log(JSON.stringify(store))
        crashlytics.setStringValue("store", JSON.stringify(store));
        if(data) {
          crashlytics.log('data', JSON.stringify(data))
          crashlytics.setStringValue("data", JSON.stringify(data));
        }
        crashlytics.recordError(errorCode, message)
    } catch (e) {
        crashlytics.recordError(REPORTING_ERROR_FAILED, `${e}`)
    }
  }
}