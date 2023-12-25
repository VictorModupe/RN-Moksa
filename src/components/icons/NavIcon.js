import React, { Component } from 'react';
import Svg from './Svg';
import { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const NavIcon = (props) => {
  return (
        <Svg {...props}>
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
                <G id="Dashboard" transform="translate(-15.000000, -28.000000)" fill-rule="nonzero" stroke="#1A1919">
                    <G id="Group" transform="translate(15.000000, 28.000000)">
                        <Path d="M0,0.5 L20,0.5" id="Path-36"></Path>
                        <Path d="M0,5.5 L20,5.5" id="Path-36"></Path>
                    </G>
                </G>
            </G>
        </Svg>
  );
}


export { NavIcon };
