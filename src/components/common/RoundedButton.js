import React from 'react';
import { TouchableOpacity, ActivityIndicator, Text } from 'react-native';

const RoundedButton = (props) => {
  const { onPress, title, backgroundColor, borderColor, textColor, removePadding, textSize, sidePadding, disabled, style, loading } = props;
  const { buttonStyle, textStyle, buttonPaddingStyle } = styles;
  const bgColor = backgroundColor || buttonStyle.backgroundColor;
  const brdColor = borderColor || bgColor;
  const txtColor = textColor || textStyle.color;
  const txtSize = textSize || textStyle.fontSize;
  const buttonSidePadding = sidePadding ? { paddingLeft : sidePadding, paddingRight : sidePadding } : buttonPaddingStyle;
  const basicStyle = { ...buttonStyle, backgroundColor : bgColor, borderColor : brdColor };
  const roundedButtonStyle = (removePadding) ? basicStyle : { ...basicStyle, ...buttonSidePadding };
  const roundedButtonTextStyle = { ...textStyle, color : txtColor, fontSize : txtSize };

  return (
    <TouchableOpacity style={[roundedButtonStyle, style]} disabled={disabled || loading} onPress={onPress}>
      {!loading && <Text style={roundedButtonTextStyle} >{title}</Text>}
      {loading && <ActivityIndicator />}
    </TouchableOpacity>
  );
};

const styles = {
  textStyle : {
    color : 'white',
    fontSize : 16,
    textAlign : 'center',
  },
  buttonStyle : {
    backgroundColor : 'transparent',
    borderColor : 'white',
    borderWidth : 2,
    borderRadius : 25,
    padding : 8,
    height : 40,
  },
  buttonPaddingStyle : {
    paddingLeft : 55,
    paddingRight : 55,
  },
};

export { RoundedButton };
