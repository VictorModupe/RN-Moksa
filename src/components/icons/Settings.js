import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const Settings = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox="0 0 34 34" version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <G id="Menu" transform="translate(-29.000000, -463.000000)" fill-rule="nonzero" stroke="#1A1919">
                    <G id="Group-3" transform="translate(25.000000, 103.000000)">
                        <Polygon id="Path-34" points="24.2 361 17.8 361 17.8 364.2 14.6 367.4 11.4 364.2 8.2 367.4 11.4 370.6 8.2 373.8 5 373.8 5 380.2 8.2 380.2 11.4 383.4 8.2 386.6 11.4 389.8 14.6 386.6 17.8 389.8 17.8 393 24.2 393 24.2 389.8 27.4 386.6 30.6 389.8 33.8 386.6 30.6 383.4 33.8 380.2 37 380.2 37 373.8 33.8 373.8 30.6 370.6 33.8 367.4 30.6 364.2 27.4 367.4 24.2 364.2"></Polygon>
                    </G>
                </G>
            </G>
        </Svg>
  );
}


export { Settings };
