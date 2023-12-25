// import React, { Component } from 'react';
// import {
//   View,
// } from 'react-native';
// import { Provider } from 'react-redux';
// import store from '../store';
// import AuthenticatedRouter from '../AuthenticatedRouter';

// export default class AuthenticatedView extends Component {
//   render() {
//     return (
//         <Provider store={store}>
//           <View style={{ flex : 1 }}>
//             <AuthenticatedRouter />
//           </View>
//         </Provider>
//     );
//   }
// }





// Key changes:

// Removed import { Component } from 'react'; since the component is now a functional component.
// Replaced the class AuthenticatedView syntax with const AuthenticatedView = () =>.
// Removed the render method since functional components don't have a render method; instead, the component returns JSX directly.
// Exported the component directly at the end.





import React from 'react'; //imported react functionalities while removing the component stuff since components are not needed in a functional component
import { View } from 'react-native';
import { Provider } from 'react-redux';//provides the app with the redux store to make the store available
import store from '../store'; //It holds the state of the app
import AuthenticatedRouter from '../AuthenticatedRouter';

const AuthenticatedView = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}> 
        <AuthenticatedRouter />
      </View>
    </Provider>
  );
};

export default AuthenticatedView;

//setting the flex property to 1 allows the view to take up the available space or the entire screen

//  <AuthenticatedRouter/> Component handles navigation and display based on a user's authentication status. Whether the user is an admin, or regular user or another type of user

//the provider component is a part of redux library and is used to wrap "around" the whole app

//provider component provides the redux store for all components in the component tree

//The store is an instance of the redux store created with the createStore function from the Redux library 
//This store which is an instance contains the state of the application

//store = {store} is a prop passed to the provider component
//  it tells the Provider Component about the Store that it should make available to or provide to the components in component tree

//Provider is a sort of a middleman, allows access to redux store and also makes the store available to components. Without provider, components will not be able to interact with the state that the Redux store holds