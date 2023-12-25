import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../common/Colors';
import { isIphoneXorAbove } from '../../utils/utils';
  
class CardModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swipeDisabled : false,
    }
  }

  render() {
    const { isModalVisible, onDismissed, modalView : ModalView, title } = this.props
    const { modalStyle, containerStyle, modalThumbStyle, modalThumbContainer } = styles
    
    //if swipe is not working confirm that the react-native-modal code is updating onSwipe/swipeDirection props
    return (
      <Modal 
        style={modalStyle} 
        onBackButtonPress={() => {
          onDismissed()
        }}
        isVisible={isModalVisible}
        backdropColor={"#000"}
        onSwipe={ this.state.swipeDisabled ? undefined : onDismissed }
        swipeDirection={ this.state.swipeDisabled ? undefined : 'down' }
        backdropOpacity={.55}>
        <View style={{ flex: 1}}>
          <View style={modalThumbContainer}>
            <View style={modalThumbStyle} />
          </View>
          <View style={containerStyle}>
            <ModalView onDismissed={onDismissed} title={title} 
              onDisableSwipe={(swipeDisabled) => { 
                this.setState({ swipeDisabled } )
              }} />
          </View>
        </View>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  modalStyle: { 
    flex : 1,  
    marginLeft : 10,
    marginRight : 10,
    marginBottom: 10,
    marginTop: isIphoneXorAbove() ? 50: 20,
  },
  containerStyle: {
    flex: 1, 
    backgroundColor : Colors.WHITE, 
    borderRadius : 25,
    padding: 10,
  },
  modalThumbContainer : { 
    width : '100%', 
    alignItems: 'center',
    marginBottom : 15 
  },
  modalThumbStyle : { 
    height : 5,
    width : 50,
    borderRadius : 25,
    backgroundColor : Colors.WHITE,
    opacity : .5 
  },
});

export default CardModal