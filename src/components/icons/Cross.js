import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const Cross = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`0 0 20 20`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Menu" fill-rule="nonzero" stroke={stroke}>
                    <Polyline id="Path-38" transform="translate(15.000000, 10.000000) rotate(90.000000) translate(-15.000000, -10.000000) " points="5 5 15 15 25 5"></Polyline>
                    <Polyline id="Path-38" transform="translate(5.000000, 10.000000) scale(-1, 1) rotate(90.000000) translate(-5.000000, -10.000000) " points="-5 5 5 15 15 5"></Polyline>
                </G>
            </G>
        </Svg>
  );
}


export { Cross };
