import React, { Component } from 'react'
import { FlatList } from 'react-native'

class ModalFlatList extends Component {
  render() {
    const { onDisableSwipe, ref } = this.props

    return (
      <FlatList
        {...this.props}
        ref={this.props.innerRef}
        onTouchStart={() => {
            onDisableSwipe(true)
        }}
        onTouchEnd={() => {
            onDisableSwipe(false)
        }}
        onScrollBeginDrag={() => {
            onDisableSwipe(true)
        }}
        onScrollEndDrag={() => {
            onDisableSwipe(false)
        }}
      /> 
    );
  }
}


export default ModalFlatList