/** @format */

import { AppRegistry, Platform } from 'react-native';
import {name as appName} from './app.json';

import App from './src/App';
import BackgrounNotifications from './src/BackgrounNotifications';

AppRegistry.registerComponent(appName, () => App);

if(Platform.OS == 'android') {
    AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => BackgrounNotifications)
}