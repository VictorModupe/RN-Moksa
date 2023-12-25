import {
    SHOW_PROFILE_MODAL,
    ORIENTATION_CHANGE,
    DRAWER_VIEW,
    DRAWER_OPEN_STATUS,
    MAIN_CARD_INDEX
  } from './types';    
import { Actions } from 'react-native-router-flux';
import { Keyboard } from 'react-native'

export const showProfileModal = (showProfile) => {
    return {
      type : SHOW_PROFILE_MODAL,
      payload : showProfile,
    };
};

export const orientationChange = (orientation) => {
    return {
      type : ORIENTATION_CHANGE,
      payload : orientation,
    };
};

export const mainDrawer = (closeFirst) => {
  return async (dispatch) => {
    dispatch(drawerOpenStatus(true))
    if(closeFirst) {
      return dispatch(switchToDrawer('main'))
    }

    dispatch(openDrawer('main'))
  }
}

export const settingsDrawer = (closeFirst) => {
  return async (dispatch) => {
    if(closeFirst) {
      return dispatch(switchToDrawer('settings'))
    }

    dispatch(openDrawer('settings'))
  }
}

export const openDrawer = (drawer) => {
  return async (dispatch) => {
    dispatch({ type : DRAWER_VIEW, payload : drawer })
    Actions.drawerOpen()
  }
}

export const switchToDrawer = (drawer) => {
  return async (dispatch) => {
    Keyboard.dismiss()
    
    Actions.drawerClose()
    setTimeout(() => {
      dispatch({ type : DRAWER_VIEW, payload : drawer })

      Actions.drawerOpen()
    }, 250)
  }
}

export const closeDrawer = () => {
  return async (dispatch) => {
    dispatch(drawerOpenStatus(false))

    Actions.drawerClose()
  }
}

export const drawerOpenStatus = (drawerOpen) => {
  Keyboard.dismiss()

  return {
    type : DRAWER_OPEN_STATUS,
    payload : drawerOpen,
  };
};

export const mainCardsIndex = (index) => {
  return async (dispatch) => {
    dispatch({ type : MAIN_CARD_INDEX, payload : index })
  }
}