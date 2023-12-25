import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  LayoutAnimation,
  Keyboard,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import TextInput from '../common/TextInput'
import Colors from '../common/Colors';
import Button from '../common/Button'
import ErrorModal from './ErrorModal'
import { setError } from '../../actions/errors';
import { LOGIN_MODAL, REGISTER_MODAL, FORGOT_PASSWORD_MODAL } from '../../actions/types';
import { loginUser, resetPassword, modalTypeChanged, loginModalHide, createAccount } from '../../actions/authentication';
import { Carrot } from '../icons';
import SubmitButton from '../common/SubmitButton';
  
class LoginModal extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      name : '',
      email : '', 
      password : '',
      showModalText : true,
      focusedInput : '',
    }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardDidHide.bind(this));
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ showModalText : false })
  }

  _keyboardDidHide () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ showModalText : true });
  }

  toggleModalType = () => {
    const { loginModalType } = this.props
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

    let nextModal = LOGIN_MODAL
    switch(loginModalType) {
      case LOGIN_MODAL:
        nextModal = REGISTER_MODAL
        break;
      case REGISTER_MODAL:
      case FORGOT_PASSWORD_MODAL:
      default:
        nextModal = LOGIN_MODAL
        break;
    }

    this.props.modalTypeChanged(nextModal)
  }

  onSubmitPressed = () => {
    const { name, email, password } = this.state
    const { loginModalType } = this.props

    if(loginModalType == FORGOT_PASSWORD_MODAL) {
      this.props.resetPassword({ email })
      return;
    }


    if(loginModalType == REGISTER_MODAL) {
      this.props.createAccount({ fullname : name, email, password })
      return;
    }

    //this.onDismiss()
    //this.props.onSubmit({ name, email, password })
    this.props.loginUser({ email, password })
  }

  onDismiss = () => {
    const { error } = this.props
    
    if(!error) {
      return this.props.loginModalHide()
    }

    this.dismissError()

    setTimeout(() => {
      this.props.loginModalHide()
    }, 250);
  }
  
  setNextInput = (nextInput) => {
    if(nextInput) {
      nextInput.focus();
    }
  }

  dismissError = () => {
    this.props.setError();
    const { loginModalType } = this.props

    if(loginModalType == FORGOT_PASSWORD_MODAL) {
      this.toggleModalType()
    }
    
    this.setState({ password : '' });
  }

  onForgotPassword = () => {
    this.dismissError()

    setTimeout(() => {
      this.props.modalTypeChanged(FORGOT_PASSWORD_MODAL)
    }, 250)
  }

  render() {
    const { isModalVisible, loginModalType,  error, loading, showResetPassword } = this.props
    const { name, email, password } = this.state
    const { modalStyle, containerStyle, modalThumbStyle, modalThumbContainer, subcontainerStyle, logoStyle, createAccountStyle, createAccountButtonStyle, 
            accountNoteStyle, actionContainerStyle, switchModeTextStyle, loginButtonStyle } = styles

    let modalMessage = ''
    let footerMessage = ''
    let actionButtonText = ''
    switch(loginModalType) {
      case LOGIN_MODAL:
        modalMessage =  'Create an account to receive can and bottle release details, view current brews on tap, and other awesome news!'
        footerMessage = '*Your login information is linked to moksabrewing.com'
        actionButtonText = 'CREATE ACCOUNT'
        break
      case REGISTER_MODAL:
        modalMessage =  'Thanks for loving awesome beer! Login below to configure push notifications and access additional content!'
        footerMessage = '*Your login information is linked to moksabrewing.com'
        actionButtonText = 'CANCEL  &  LOG IN'
        break
      case FORGOT_PASSWORD_MODAL:
        modalMessage =  'Just a reminder, your login is the same as it is on moksabrewing.com. To go ahead and reset your password please enter your email address below.'
        footerMessage = ''
        actionButtonText = 'CANCEL'
        break
    }

    if(showResetPassword && loginModalType != FORGOT_PASSWORD_MODAL) {
      footerMessage = 'Reset Password\n'
    }

    const InputContainer = Platform.OS == 'ios' ? KeyboardAvoidingView : View
    
    const resetPasswordView = (
      <TouchableOpacity onPress={this.onForgotPassword}>
        <Text style={[accountNoteStyle, { color : 'white', marginTop : 20 }]}>{'Reset Password\n'}</Text>
      </TouchableOpacity>
    )
    return (
      <Modal style={modalStyle} isVisible={isModalVisible} onSwipe={this.onDismiss} swipeDirection={error ? undefined : 'down'} backdropOpacity={.15} easing="ease-in-out-cubic" onBackButtonPress={this.onDismiss}>
      <ErrorModal isModalVisible={error ? true : false} onDismissed={this.dismissError} message={error} actionView={!showResetPassword ? undefined : resetPasswordView } />
        
        <View style={modalThumbContainer}>
          <View style={modalThumbStyle} />
        </View>
        <View style={containerStyle}>
          <View style={subcontainerStyle}>
            {this.state.showModalText && <Image style={logoStyle} resizeMode={'contain'} source={require('../../assets/logo_black.png')} /> }
            {this.state.showModalText &&  <Text style={createAccountStyle}>{modalMessage}</Text>}
          </View>

          <InputContainer style={[subcontainerStyle, { flex : 1, justifyContent : 'flex-end', marginBottom : 10 }]} behavior='padding' enabled>
            {loginModalType == REGISTER_MODAL &&
              <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                returnKeyType='next'
                placeholder={'NAME'}
                underlineColor={Colors.BLACK}
                placeholderTextColor={Colors.RED}
                blurOnSubmit={false} 
                value={name}
                onSubmitEditing={() => this.setNextInput(this.emailInput)}
                onChangeText={(value) => this.setState({ name : value })}
              />
            }
            <TextInput
              ref={(input) => { this.emailInput = input; }}
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='next'
              placeholder={'EMAIL'}
              underlineColor={Colors.BLACK}
              placeholderTextColor={Colors.RED}
              value={email}
              onSubmitEditing={() => this.setNextInput(this.passwordInput)}
              blurOnSubmit={false} 
              onChangeText={(value) => this.setState({ email : value })}
            />
            {loginModalType != FORGOT_PASSWORD_MODAL &&
            <TextInput
              ref={(input) => { this.passwordInput = input; }}
              autoCapitalize='none'
              autoCorrect={false}
              returnKeyType='done'
              placeholder={'PASSWORD'}
              underlineColor={Colors.BLACK}
              placeholderTextColor={Colors.RED}
              value={password}
              onChangeText={(value) => this.setState({ password : value })}
              secureTextEntry
              onSubmitEditing={this.onSubmitPressed}
            />
            }
            <View style={actionContainerStyle}>
              <TouchableOpacity onPress={this.toggleModalType} disabled={loading}>
                <Text style={switchModeTextStyle}>{actionButtonText}</Text>
              </TouchableOpacity>
              {loginModalType != FORGOT_PASSWORD_MODAL &&
                <SubmitButton style={{ marginLeft : 50 }} onSubmitPressed={this.onSubmitPressed} loading={loading} />
              }
              {loginModalType == FORGOT_PASSWORD_MODAL &&
                
                <Button label={' Send Password'} style={loginButtonStyle} onPress={this.onSubmitPressed} uppercase />

              }
            </View>
            <TouchableOpacity disabled={!showResetPassword} onPress={this.onForgotPassword}>
             <Text style={accountNoteStyle}>{footerMessage}</Text>
             </TouchableOpacity>
          </InputContainer>

        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  modalStyle: { 
    flex : 1,
    paddingTop : 5,
    marginBottom : 0, 
  },
  modalThumbContainer : { 
    width : '100%', 
    alignItems: 'center', 
    paddingTop : 15, 
    paddingBottom : 15 
  },
  modalThumbStyle : { 
    height : 5,
    width : 50,
    borderRadius : 25,
    backgroundColor : Colors.WHITE,
    opacity : .5 
  },
  containerStyle: {
    flex: 1, 
    backgroundColor : Colors.WHITE, 
    borderTopStartRadius : 25,
    borderTopEndRadius : 25,
    marginBottom : -30, 
    height : '110%',
    paddingTop : 20,
    paddingBottom : 40,
    paddingLeft : 20,
    paddingRight : 20,
    alignItems: 'center',
  },
  subcontainerStyle: {  
    width : '100%',
    alignItems: 'center',
  },
  logoStyle : {
    width: 75, 
    height: 75,
  },
  createAccountStyle : {
    fontSize : 17,
    marginTop : 25,
    fontFamily : 'TradeGothicLT-Light',
    lineHeight: 25,
  },
  createAccountButtonStyle : { 
    backgroundColor : Colors.RED, 
    borderRadius : 25, 
    width : 50, 
    height : 50, 
    alignItems : 'center', 
    justifyContent : 'center',
    marginLeft : 50,
  },
  accountNoteStyle : { 
    textAlign : 'center',
    fontFamily : 'TradeGothicLT-Light'
  },
  switchModeTextStyle : { 
    fontSize : 17,
    padding : 20,
    fontFamily : 'TradeGothicLT-Bold',
    width : 175
  },
  actionContainerStyle : { 
    flexDirection : 'row', 
    alignItems : 'center',
    marginTop : 10,
    marginBottom : 20,
  },
  loginButtonStyle : { 
    backgroundColor : '#8A4949', 
    fontSize : 17,
    padding : 10,
    fontFamily : 'TradeGothicLT-Bold',
    width : 150,
    marginLeft: -25,
  },
});

const mapStateToProps = ({ authentication }) => {
  const { error, loading, loginModalType, showResetPassword } = authentication
  
  return { error, loading, loginModalType, showResetPassword }
}

export default connect(mapStateToProps, { setError, loginUser, resetPassword, modalTypeChanged, loginModalHide, createAccount })(LoginModal)