import React from 'react'
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import Colors from './Colors';

const Button = ({ textStyle, label, onPress, style, loading, backgroundColor, color, uppercase }) => {
  const { container, activityIndicator, labelStyle } = styles;
  
  const backgroundColorStyle = { backgroundColor : backgroundColor || style.backgroundColor || Colors.RED }
  const borderColorStyle = { borderColor : backgroundColorStyle.backgroundColor }
  const colorStyle = { color : color || style.color || Colors.WHITE }

  const labelText = uppercase ? (label || '').toUpperCase() : label;
  
  return (
    <TouchableOpacity style={[container, style, backgroundColorStyle, borderColorStyle ]} onPress={onPress} >
      { loading && 
        <View style={activityIndicator}>
          <ActivityIndicator size="small" color={colorStyle.color} />
        </View>
      }
      { !loading &&
        <Text allowFontScaling={false} style={[labelStyle, textStyle, colorStyle]}>{labelText}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    height: 50,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 30,
    paddingLeft : 15,
    paddingRight : 15,
    margin : 10,
  },
  labelStyle: {
    fontSize : 16,
    alignItems : 'center',
    justifyContent : 'center',
    textAlign : 'center',
    fontFamily : 'TradeGothicLT-Bold'
  },
  activityIndicator : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
}

export default Button