import React, { Component } from 'react'
import { Platform, View, TextInput, ActivityIndicator } from 'react-native'
import Colors from './Colors';

type Props = { 
  focus: PropTypes.bool,
} 

class TextInputWrapper  extends Component<Props>{

  static defaultProps = { 
      focus: false,
  } 

  focus  = () => {
      if(this._component) {
        this._component.focus();
      }
      if(this._onFocus) {
        //this._onFocus()
      }
  } 

  isFocused  = () => {
    if(!this._component) {
      //return false
    }
    
    this._component.focus(); 
  } 
  
  componentWillReceiveProps(nextProps) {
      const { focus } = nextProps || { }; 

      //focus && this.focus(); 
  }

  render() {
    const { style, placeholder, underlineColor, placeholderTextColor, value, onChangeText, secureTextEntry, onSubmitEditing, autoFocus, blurOnSubmit,returnKeyType, onFocus, maxLength  } = this.props

    const { container } = styles;
    this._onFocus = onFocus

    const fontStyle = { fontFamily : 'TradeGothicLT-Light' }
    const underlineStyle = Platform.OS === 'ios' && underlineColor ? { borderBottomColor: underlineColor, borderBottomWidth: 1 } : {}
    const underlineColorAndroid = underlineColor || Colors.TRANSPARENT

    return (
        <TextInput
          ref={(input) => { this._component = input; }}
          style={[ container, fontStyle, style, underlineStyle,  ]}
          allowFontScaling={false}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType={returnKeyType || 'done'}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid={underlineColorAndroid}
          secureTextEntry={secureTextEntry}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          autoFocus={autoFocus}
          blurOnSubmit={blurOnSubmit}
          onFocus={onFocus}
          maxLength={maxLength}
          
        />
    )
  }
}

const styles = {
  container: {
    fontSize : 17,
    width : '100%',
    paddingLeft : 20,
    paddingRight : 20,
    paddingTop : 10,
    paddingBottom : 10,
    marginTop : 20,
    marginBottom : 20,
    textAlign : 'center',
  },
}

export default TextInputWrapper