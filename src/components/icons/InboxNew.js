import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path , Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const InboxNew = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`-.5 0 29 34`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Menu" fill-rule="nonzero" stroke="#1A1919">
                    <Path d="M-5.68434189e-14,18.9405941 L0.0001791554,30.8217822 C-0.01185328,32.1419142 0.582206126,32.8019802 1.78235737,32.8019802 C2.98250862,32.8019802 10.7052809,32.8019802 24.9506742,32.8019802 C26.138793,32.8242927 26.7328524,32.1642267 26.7328524,30.8217822 C26.7328524,29.4793377 26.7328524,25.5189417 26.7328524,18.9405941 L21.3863178,18.9405941 L19.6041396,22.9009901 L7.12889203,22.9009901 L5.34671381,18.9405941 L-5.68434189e-14,18.9405941 Z" id="Path-30" stroke="#1A1919" stroke-linecap="round"></Path>
                    <Polyline id="Path-31" stroke="#1A1919" stroke-linecap="round" points="1.78217822 18.9405941 5.34653465 13 21.3861386 13 24.950495 18.9405941"></Polyline>
                    { hasNew && <Rect id="Rectangle" stroke="#985B5B" fill="#985B5B" x="21.6" y="0" width="5.4" height="6" rx="2.7"></Rect> }
                </G>
            </G>
        </Svg>
  );
}


export { InboxNew };
