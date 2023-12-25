import React, { Component } from 'react';
import Svg from 'react-native-svg';

export default wrapper = ({width, height,children, style}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox="0 0 20 6" version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            {children}
        </Svg>
  );
}
