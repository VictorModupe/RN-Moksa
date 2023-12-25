import React, { Component } from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
  
export default class CloseButton extends Component {
  

  constructor(props) {
    super(props)
  }

  render() {
    const { style, onPress, icon : Icon } = this.props
    const { closeStyle } = styles
    const { width, height, color } = closeStyle
    const { width : propWidth, height : propHeight, color : propColor } = style || { }
    
    const crossStyle = { height : propHeight || height , width : propWidth || width }

    if(!onPress) {
      return <Icon style={crossStyle} stroke={propColor || color}/>
    }
    return (
        <TouchableOpacity style={[style, closeStyle]} onPress={onPress}>
          <Icon style={crossStyle} stroke={propColor || color}/>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  closeStyle : {
    height : 20,
    width : 20,
    color : 'white',
  },
});