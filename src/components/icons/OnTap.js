import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const OnTap = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`0 0 18.5 32.5`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <G id="Menu" fill-rule="nonzero" stroke="#1A1919">
                    <Path d="M2.94398493,0 C-5.56521296,23.36 9.34398493,23.4666667 9.34398493,23.4666667 L9.34398493,32 L2.94398493,32 L15.7439849,32 C11.4780986,32 9.34515548,32 9.34515548,32 C9.34515548,32 9.34398493,23.4666667 9.34398493,23.4666667 C9.34398493,23.4666667 24.2662675,23.36 15.7439849,0" id="Path-2"></Path>
                </G>
            </G>
        </Svg>
  );
}


export { OnTap };
