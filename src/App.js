import React, { Component } from 'react' //the main React library || the Component is the base class for react components
import { Provider } from 'react-redux'; //it is a react redux component that makes redux store available to the rest of the app
import { 
  StatusBar,
} from 'react-native'; //A React Native component for configuring the status bar. 
import Orientation from 'react-native-orientation'; //A library for managing screen orientation in React Native.
import axios from 'axios'; //Axios is an HTTP client that is used to handle api requests
import env from '../env'; //This is for environent variables
import MainRouter from './MainRouter'; //Custom router component in the src folder
import store from './store'; //This redux store is for state management
import AuthenticatedRouter from './AuthenticatedRouter'; //another custom router component in the src folder
import firebase from 'react-native-firebase'; //firebase library for react native


axios.defaults.baseURL = env.API_BASE_URL
axios.defaults.headers.common['Authorization'] = env.BASIC_AUTH
axios.defaults.headers.common['Cache-Control'] = 'No-Store'
console.disableYellowBox = true;

export default class App extends Component {
  
  async componentDidMount() {
    // this locks the view to Portrait Mode
    Orientation.lockToPortrait();
  }

  render() {
    return (
			<Provider store={store}>
          <StatusBar hidden />
          <MainRouter />
			</Provider>
    );
  }
}