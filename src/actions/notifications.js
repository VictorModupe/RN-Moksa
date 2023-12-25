import { TOGGLE_NOTIFICATION, PROCESSING_TOPIC, PROCESSING_SUB_TOPIC, UPDATE_MESSAGES, CLEAR_OPENED_NOTIFICATION, OPENED_NOTIFICATION } from './types';
import firebase from 'react-native-firebase';
import axios from 'axios'
import { AsyncStorage, Alert } from 'react-native';

import { setError, processException } from './errors';
import { retrieveDashboard } from './authentication';

const MESSAGE_USER_STATUS_ENDPOINT = '/v1/gsmmessagesuserstatus'
const MESSAGE_DEVICE_SUBSCRIPTIONS_ENDPOINT = '/v1/gsmmessagesdevicesubscriptions'
const REGISTER_FIREBASE_ENDPOINT = '/v1/gsmmessagesuserdevices'

export const loadNotifications = () => {
    return async (dispatch) => {

        const { data: messageUserStatusData } = await axios.get(`${MESSAGE_USER_STATUS_ENDPOINT}`)
        const value = parseMessaageUserStatusResponse(messageUserStatusData)
        dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic: 'messageUserStatus', value } })

        const { data } = await axios.get(`${MESSAGE_DEVICE_SUBSCRIPTIONS_ENDPOINT}`)
        const { results } = data || []

        results.forEach(({ id: value, join_name: topic }) => {
            dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic, value } })
        })
    }
}

export const toggleMain = (activate) => {
    return async (dispatch, getStore) => {
        dispatch({ type: PROCESSING_TOPIC, payload: 'messageUserStatus' })


        if(activate) {
            const { notifications, authentication } = getStore()
            const { comingSoon, events, foodTrucks, member, advocator, newReleases } = notifications
            const { user } = authentication
            const { permissions : userPermissions } = user || { }
            const permissions = userPermissions || []

            const subscribeList = []
            if(!comingSoon) {
                subscribeList.push('comingSoon')
            }
            if(!newReleases) {
                subscribeList.push('newReleases')
            }
            if(!events) {
                subscribeList.push('events')
            }
            if(!foodTrucks) {
                subscribeList.push('foodTrucks')
            }
            if(!member && permissions.includes('is_memberhood')) {
                subscribeList.push('member')
            }
            if(!advocator && permissions.includes('is_advocator')) {
                subscribeList.push('advocator')
            }
            
            dispatch(subscribeToTopicList(subscribeList))
        }

        const payload = { operation: activate ? 'activate' : 'deactivate' }
        const { data } = await axios.put(`${MESSAGE_USER_STATUS_ENDPOINT}`, payload)
        const value = parseMessaageUserStatusResponse(data)


        dispatch({ type: PROCESSING_SUB_TOPIC, payload: undefined })
        dispatch({ type: PROCESSING_TOPIC, payload: undefined })
        dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic: 'messageUserStatus', value } })
    }
}

const parseMessaageUserStatusResponse = (data) => {
    const { object } = data || { }
    const { active } = object || { }

    return active == 1
}

export const toggleNotification = (topic) => {
  return async (dispatch, getStore) => {

    const enabled = await firebase.messaging().hasPermission();
    if (!enabled) {
        try {
            await firebase.messaging().requestPermission();
        } catch(e) {
            Alert.alert(
              'Push Notifications',
              'It seems push notification permissions have been disabled\n\nPlease re-enable them in the Settings app?',
              [
                { text : 'OK'},
              ],
              { cancelable : true },
            );
        }

      return
    }
    
    const { notifications } = getStore()
    const { messageUserStatus } = notifications

    if(topic == 'messageUserStatus') {
        dispatch(toggleMain(!messageUserStatus))

        return
    }

    const currentValue = notifications[topic]

    if(currentValue > 0) {
        dispatch(unsubscribeToTopic(topic, currentValue))
    } else {
        dispatch(subscribeToTopic(topic))
    }
  }
}

const subscribeToTopic  = (topic) => {
    return async (dispatch) => {
        dispatch({ type: PROCESSING_TOPIC, payload: topic })

        const payload = { group_name: topic, group_type: 'topic' }
        const { data } = await axios.post(`${MESSAGE_DEVICE_SUBSCRIPTIONS_ENDPOINT}`, payload)

        
        const { results } = data || { }
        const result = results && results.length > 0 ? results[0] : { }
        const { id } = result
        const value = id > 0 ? id : false

        dispatch({ type: PROCESSING_TOPIC, payload: undefined })
        dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic: 'messageUserStatus', value: true } })
        dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic, value } })
    }
}

const subscribeToTopicList  = (topics) => {
    return async (dispatch) => {
        if(!topics || topics.length <= 0) {
            return
        }

        dispatch({ type: PROCESSING_TOPIC, payload: 'messageUserStatus' })

        for(let i = 0; i < topics.length; i++) {
            dispatch({ type: PROCESSING_SUB_TOPIC, payload: topic })
            const topic = topics[i]
            const payload = { group_name: topic, group_type: 'topic' }
            const { data } = await axios.post(`${MESSAGE_DEVICE_SUBSCRIPTIONS_ENDPOINT}`, payload)

            
            const { results } = data || { }
            const result = results && results.length > 0 ? results[0] : { }
            const { id } = result
            const value = id > 0 ? id : false

            dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic, value } })
        }
    }
}

const unsubscribeToTopic = (topic, topicId) => {
    return async (dispatch, getStore) => {
        dispatch({ type: PROCESSING_TOPIC, payload: topic })

        const { data } = await axios.delete(`${MESSAGE_DEVICE_SUBSCRIPTIONS_ENDPOINT}/${topicId}`)
        const { object } = data || {}
        const { join_name } = object || {}

        if(join_name) {
            dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic: join_name, value: false } })
        }

        const { notifications } = getStore()
        const { comingSoon, events, foodTrucks, member, advocator, newReleases } = notifications

        if(!comingSoon && !events && !foodTrucks && !member && !advocator && !newReleases) {
            dispatch({ type : TOGGLE_NOTIFICATION, payload : { topic: 'messageUserStatus', value: false } })
        }

        dispatch({ type: PROCESSING_TOPIC, payload: undefined })
    }
}

export const uploadFirebaseToken = () => {
  return async (dispatch, getState) => {
      try {
        const { authentication } = getState()
        const { user } = authentication
        const { id: user_id } = user

        const remote_device_id = await firebase.messaging().getToken();
        const post = {
          remote_device_id,
          user_id,
        }

        //console.log(`${REGISTER_FIREBASE_ENDPOINT}`, post)
        const { data } = await axios.post(`${REGISTER_FIREBASE_ENDPOINT}`, post)
      } catch (error) {
          const { message, status } = processException(error, dispatch)

          dispatch(setError(message))
      }
  }
}


export const archiveMessage = (message) => {
    return async (dispatch) => {
        dispatch(updateMessage(message, { archive: true }))
    }
}

export const unarchiveMessage = (message) => {
    return async (dispatch) => {
        dispatch(updateMessage(message, { archive: false }))
    }
}

export const readMessage = (message) => {
    return async (dispatch) => {
        dispatch(updateMessage(message, { unread: false }))
    }
}

export const updateMessage = (message, updates) => {
    return async (dispatch, getStore) => {
        const { notifications } = getStore()
        const { messages } = notifications
        const updatedMessages = [ ...messages ]
        const messageCount = updatedMessages.length
        
        for(let i = 0; i < messageCount; i++) {
            const currentMessage = messages[i]
            if(currentMessage.id == message.id) {
                updatedMessages[i] = { ...currentMessage, ...updates}
            }
        }
            
        dispatch({ type : UPDATE_MESSAGES, payload : updatedMessages })
        dispatch(saveMessages())
    }
}

export const addMessage = (notification, showNotification = false) => {
    return async (dispatch, getStore) => {
        const { notificationId: id, title, photo, sent_on, end, details, topic, body } = notification
        const { notifications } = getStore()
        const { messages } = notifications
        const filtered = messages.filter(({ id: messageId, title: messageTitle, body: messageBody }) => messageId != id || (messageTitle != title && messageBody != body) )
        const newNotification = { id, title, body, details, photo, start: sent_on, end, topic: topic, archive: false, unread: true }
        const updatedMessages = [ ...filtered, newNotification ]

        dispatch({ type : UPDATE_MESSAGES, payload : updatedMessages })
        dispatch(saveMessages())

        if(showNotification) {
            dispatch(showOpenedNotification(newNotification))
        }
    }
}

export const restoreMessages = () => {
    return async (dispatch) => {
      try {  
        const messagesString = await AsyncStorage.getItem('messages');
  
        const messages = JSON.parse(messagesString) || [];
  
        dispatch({ type : UPDATE_MESSAGES, payload : messages })
  
      } catch (error) {
        console.log(error);
      }
    }
  }
  
  export const saveMessages = () => {
    return async (dispatch, getStore) => {
        const { notifications } = getStore()
        const { messages } = notifications
  
      try {
        const messagesStrings = JSON.stringify(messages);
  
        await AsyncStorage.setItem('messages', messagesStrings);
  
        return true;
      } catch (error) {
        console.log(error);
      }
  
      return false;
    }
  }

  export const showOpenedNotification = (message) => {
      return async (dispatch) => {
          dispatch({ type: OPENED_NOTIFICATION, payload: message})
      }
  }
  export const clearOpenedNotification = () => {
      return async (dispatch) => {
          dispatch({ type: CLEAR_OPENED_NOTIFICATION})
      }
  }

  export const processMessage = (message) => {
      return async (dispatch, getStore) => {
          const { data } = message
          const { command } = data || { }

          if(!command) {
              console.log('undefined command skipping message')
              return
          }

          switch(command) {
            case "refresh_cards":
                await retrieveDashboard(dispatch, getStore)
                break;
            default:
                console.log('unsupported command', command)
          }
      }
  }