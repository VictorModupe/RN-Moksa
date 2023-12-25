import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const BackArrow = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`0 0 31 20`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G scale={1.5} id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Settings---Logged-In" transform="translate(-24.000000, -35.000000)" fill-rule="nonzero" stroke="#1A1919">
                    <Polyline id="Path-35" points="32.4 35 24.5 42.5 32.4 50 25 42.5 55 42.5"></Polyline>
                </G>
            </G>
        </Svg>
  );
}


export { BackArrow };
