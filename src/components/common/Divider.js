import React from 'react'
import { View  } from 'react-native'
import Colors from './Colors';

const Divider = () => {
  const { itemDividerStyle } = styles

  return (
    <View style={itemDividerStyle} />
  );
}

const styles = {
  itemDividerStyle : { 
    height : .5, 
    backgroundColor : Colors.LIGHT_GREY,
    width : '100%'
  }
}

export default Divider