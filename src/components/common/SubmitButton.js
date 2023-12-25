import React, { Component } from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Carrot } from '../icons';
import Colors from './Colors';
  
export default class SubmitButton extends Component {
  

  constructor(props) {
    super(props)
  }

  render() {
    const { style, loading, onSubmitPressed, direction, disabled } = this.props
    const { submitButtonStyle } = styles

    return (
      <TouchableOpacity style={[submitButtonStyle, style]} onPress={onSubmitPressed} disabled={disabled || loading}>
      {!loading && <Carrot style={{ width : '30%', height : '30%' }} direction={ direction || 'right'} /> }
      {loading && <ActivityIndicator size="small" color={'white'} /> }
    </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  submitButtonStyle : { 
    backgroundColor : Colors.RED, 
    borderRadius : 25, 
    width : 50, 
    height : 50, 
    alignItems : 'center', 
    justifyContent : 'center',
  },
});