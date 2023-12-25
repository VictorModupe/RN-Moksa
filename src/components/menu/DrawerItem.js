import React, { Component } from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { Cross } from '../icons'
  
export default class DrawerItem extends Component {
  

  constructor(props) {
    super(props)
  }

  render() {
    const {  icon : Icon, onPress, title, iconStyle : propIconStyle, style : propStyle, bold } = this.props
    const { containerStyle, iconStyle, titleStyle } = styles
    
    const compositeIconStyle = {...iconStyle, ...propIconStyle }
    const boldStyle = bold ? { fontFamily : 'TradeGothicLT-Bold'} : {}
    return (
      <TouchableOpacity style={[containerStyle, propStyle]} onPress={onPress}>
        <Icon style={compositeIconStyle} color={compositeIconStyle.color}/>
        <Text style={[titleStyle, boldStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  containerStyle : {
    height : 50,
    marginTop : 10,
    marginBottom : 10,
    color : 'white',
    flexDirection : 'row',
    alignItems : 'center'
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