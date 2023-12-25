import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  LayoutAnimation,
} from 'react-native';
import Modal from 'react-native-modal';
import { Cross } from '../icons'
import IconButton from '../common/IconButton';
import { isIphoneXorAbove } from '../../utils/utils';
  
export default class LoginModal extends Component {
  

  constructor(props) {
    super(props)
  }

  render() {
    const { isModalVisible, onDismissed, message, actionView, containerStyle, textStyle } = this.props
    const { modalStyle, errorContainer, messageStyle, closeStyle } = styles
    
    
    return (
      <Modal style={modalStyle} isVisible={isModalVisible} onBackdropPress={onDismissed} animationIn={'slideInDown'} animationOut={'slideOutUp'} backdropOpacity={.15} >
        <View style={[errorContainer, containerStyle]} onPress={onDismissed}>
          <Text style={[messageStyle, textStyle]}>{message}</Text>
          {actionView}
        </View>
        <IconButton style={closeStyle} onPress={onDismissed} icon={Cross}/>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  modalStyle: { 
    margin: 0, 
    justifyContent : 'flex-start',
  },
  errorContainer : {
    backgroundColor : '#985B5B',
    padding: 20,
    width : '100%',
    minHeight : '20%',
    justifyContent : 'center',
  },
  messageStyle : {
    color : 'white',
    fontSize : 17,
    paddingTop: isIphoneXorAbove() ? 20 : 0,
    paddingRight : 25,
    fontFamily : 'TradeGothicLT-Light'
  },
  closeStyle : {
    position: 'absolute', 
    top: 20, 
    right: 15, 
  }
});