import React from 'react'
import { TouchableOpacity, View, ActivityIndicator  } from 'react-native'

const RadioButton = ({ selected, style, onPress, loading }) => {
  const { containerStyle, selectedStyle } = styles
  const fillColor = style && style.color ? { backgroundColor : style.color } : { }

  const ContainerView = onPress ? TouchableOpacity : View
  const border = loading ? { borderColor : '#0000' } : { borderColor : '#000'}

  return (
      <ContainerView style={[ containerStyle, style, border]} onPress={onPress}>
        { !loading && selected && <View style={[selectedStyle, fillColor]}/> }
        { loading && <ActivityIndicator /> }
      </ContainerView>
  );
}

const styles = {
  containerStyle : {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedStyle : {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: '#000',
  }
}

export default RadioButton