/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { connect } from 'react-redux'
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Actions } from 'react-native-router-flux'
import Button from './common/Button'
import LoginModal from './modal/LoginModal'
import Colors from './common/Colors'
import { Logo, Cross, Carrot } from './icons'
import { LOGIN_MODAL, REGISTER_MODAL } from '../actions/types';
import { modalTypeChanged, autoLogin, guestLogin } from '../actions/authentication';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
//isModalVisible, loginModalType
class LoginView extends Component<Props> {

  componentDidMount() {
    SplashScreen.hide()
    this.props.autoLogin()
  }

  guestLogin = () => {
    this.props.guestLogin()
  }

  render() {
    const { containerStyle, subcontainerStyle, buttonContainer, logoStyle, loginButtonStyle, createAccountStyle } = styles
    const { showLoginModal, autoAuthenticating } = this.props
    
    return (
      <ImageBackground style={containerStyle}  source={{ uri : 'splash' }} resizeMode='cover'>
        <View style={subcontainerStyle}>
          <Logo style={logoStyle} fill={'#FFF'}/>
        </View>
        
        {autoAuthenticating && 
        <View style={[subcontainerStyle, { alignItems : 'center', justifyContent : 'center' }]}>
          <ActivityIndicator size="small" color={Colors.WHITE} />
        </View>
        }
        {!autoAuthenticating && 
        <View style={subcontainerStyle}>
          <View style={buttonContainer}>
            <Button label={' Login '} style={loginButtonStyle} onPress={ () => { this.props.modalTypeChanged(LOGIN_MODAL) } } uppercase />
            <Button label={'Create Account'} style={createAccountStyle} onPress={ () => { this.props.modalTypeChanged(REGISTER_MODAL) }} uppercase  textStyle={{ textAlign: 'center' }} />
          </View>

          <Button label={'Continue As Guest'} style={{ backgroundColor : Colors.TRANSPARENT }} onPress={this.guestLogin} uppercase />
          <LoginModal isModalVisible={showLoginModal}  />
        </View>
        }
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent : 'space-between'
  },
  subcontainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle : {
    width: 200, 
    height: 171
  },
  loginButtonStyle : { 
    backgroundColor : '#8A4949', 
    flex: 1,
  },
  createAccountStyle :  { 
    backgroundColor : '#F8F5F5', 
    color : '#000',
    flex: 1,
  }
});


const mapStateToProps = ({ authentication }) => {
  const { showLoginModal, loginModalType, autoAuthenticating } = authentication
  
  return { showLoginModal, loginModalType, autoAuthenticating  }
}

export default connect(mapStateToProps, { modalTypeChanged, autoLogin, guestLogin })(LoginView)