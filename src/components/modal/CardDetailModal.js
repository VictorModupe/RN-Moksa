import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../common/Colors';
import { isIphoneXorAbove } from '../../utils/utils';
  
class CardDetailModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      swipeDisabled : false,
    }
  }
  
  render() {
    const { isModalVisible, onDismissed, itemView : ItemView, item } = this.props
    const { modalStyle, containerStyle, modalThumbStyle, modalThumbContainer } = styles
    
    return (
      <Modal 
        style={modalStyle} 
        isVisible={isModalVisible}
        onBackButtonPress={() => {
          onDismissed()
        }}
        onSwipe={ this.state.swipeDisabled ? undefined : onDismissed }
        swipeDirection={ this.state.swipeDisabled ? undefined : 'down' }
        backdropColor={"#000"}
        backdropOpacity={.15}>
        <View style={{ flex: 1}}>
        <View style={modalThumbContainer}>
          <View style={modalThumbStyle} />
        </View>
          <View style={containerStyle}>
            <ItemView onDismissed={onDismissed} item={item} 
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

export default CardDetailModal