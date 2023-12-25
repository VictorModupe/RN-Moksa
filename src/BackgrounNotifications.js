
import firebase from 'react-native-firebase';
import { RemoteMessage } from 'react-native-firebase';
import { AsyncStorage } from 'react-native';
import store from './store';
import { addMessage } from './actions/notifications';


export default async (message) => {
  console.log('message', message)
  const notification = { notificationId: message.messageId, ...message.data }
    try {
      store.dispatch(notification)
    }catch(e) { console.log(e) }
    const { notificationId: id, title, body, photo, start, end, display, topic } = notification

    try {  
        const messagesString = await AsyncStorage.getItem('messages');
  
        const messages = JSON.parse(messagesString) || [];
        const filtered = messages.filter(({ id: messageId, title: messageTitle, body: messageBody }) => messageId != id || (messageTitle != title && messageBody != body) )
  
        const messagesStrings = JSON.stringify([ ...filtered, { id, title, body, display, photo, start, end, topic: topic, archive: false, unread: true } ]);

        await AsyncStorage.setItem('messages', messagesStrings);
      } catch (error) {
        console.log(error)
      }

    return Promise.resolve();
}