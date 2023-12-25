import React, { Component } from 'react';
import { 
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View
} from 'react-native';
import RadioButton from '../common/RadioButton';
  
export default class DrawerOption extends Component {
  

  constructor(props) {
    super(props)
  }

  render() {
    const {  style, onPress, title, selected, textStyle, loading } = this.props
    const { containerStyle, iconStyle, titleStyle } = styles

    const borderColor = style && style.borderColor ? style.borderColor : 'black'
    const color = style && style.color ? style.color : 'green'

    return (
      <TouchableWithoutFeedback style={containerStyle} onPress={onPress}>
        <View style={containerStyle}>
          <Text style={[titleStyle, textStyle]}>{title}</Text>
          <RadioButton style={{ color, borderColor }} selected={selected} loading={loading} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle : {
    height : 30,
    marginTop : 12.5,
    marginBottom : 12.5,
    color : 'white',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  iconStyle : {
    height : 35,
    width : 35,
    marginRight : 30,
  },
  titleStyle : {
    fontSize : 17, 
    fontFamily : 'TradeGothicLT-Light'
  }
});