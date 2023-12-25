import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const Pint = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`0 0 20 33`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Group-5"  >
                    <Path d="M0.874042701,3 C4.64227585,4.33333333 7.91789073,4.66666667 10.7008873,4 C13.4838839,3.33333333 16.2578872,3 19.022897,3 C17.4355321,19.6962618 16.4818274,29.2527587 16.1617826,31.6694908 C16.0107025,32.8103322 4.59372195,31.6694908 3.78371009,31.6694908 C3.68927407,29.8855839 2.71938494,20.329087 0.874042701,3 Z" id="Path" fill="#985B5B"></Path>
                    <Polyline id="Path-2" stroke="#1A1919" stroke-linecap="round" stroke-linejoin="round" points="0.624013188 1.95399252e-14 3.62401319 32 16.4240132 32 19.4240132 1.95399252e-14"></Polyline>
                </G>
            </G>
        </Svg>
  )
}

export { Pint }
