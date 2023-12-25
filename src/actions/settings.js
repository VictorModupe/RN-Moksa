import {
  RESTORE_SETTINGS,
} from './types';

import { AsyncStorage } from 'react-native';

export const restoreSettings = () => {
  return async (dispatch) => {
    try {  
      const settingsString = await AsyncStorage.getItem('settings');

      const settings = JSON.parse(settingsString) || { };

      dispatch({ type : RESTORE_SETTINGS, payload : settings })

    } catch (error) {
      console.log(error);
    }
  }
}

export const saveSettings = () => {
  return async (dispatch, getState) => {
    const { settings } = getState()

    try {
      const settingsString = JSON.stringify(settings);

      await AsyncStorage.setItem('settings', settingsString);

      return true;
    } catch (error) {
      console.log(error);
    }

    return false;
  }
}