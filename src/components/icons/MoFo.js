import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const MoFo = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`-.5 0 40.5 32.5`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Menu" fill-rule="nonzero" stroke="#1A1919">
                    <Path d="M10.6666667,27.84 L25.6,27.84" id="Path-12" stroke-linecap="round"></Path>
                    <Polyline id="Path-13" stroke-linecap="round" points="32 27.7333333 36.2666667 27.7333333 36.2666667 10.6666667 6.4 10.6666667 4.26666667 19.2 -2.84217094e-14 21.3333333 -2.84217094e-14 27.7333333 4.26666667 27.7333333"></Polyline>
                    <Polyline id="Path-11" stroke-linecap="round" points="8.53333333 12.8 10.6666667 12.8 10.6666667 19.2 6.4 19.2"></Polyline>
                    <Polyline id="Path-14" stroke-linecap="round" points="12.8 12.8 12.8 21.3333333 34.1333333 21.3333333 38.4 12.8"></Polyline>
                    <Path d="M12.8,12.9066667 L40.5333333,12.9066667" id="Path-15" stroke-linecap="round"></Path>
                    <Path d="M12.8,21.3333333 L17.0666667,12.8" id="Path-16" stroke-linecap="round"></Path>
                    <Path d="M34.24,21.3333333 L34.24,12.8" id="Path-17" stroke-linecap="round"></Path>
                    <Path d="M2.13333333,25.7066667 L4.26666667,25.7066667" id="Path-18" stroke-linecap="round"></Path>
                    <Path d="M36.2666667,25.7066667 L32,25.7066667" id="Path-19" stroke-linecap="round"></Path>
                    <Path d="M12.8,25.7066667 L23.4666667,25.7066667" id="Path-20" stroke-linecap="round"></Path>
                    <Rect id="Rectangle" x="4.76666667" y="26.1" width="5.4" height="5.4" rx="2.7"></Rect>
                    <Rect id="Rectangle" x="26.1" y="26.1" width="5.4" height="5.4" rx="2.7"></Rect>
                    <Polyline id="Path-21" points="10.6666667 10.6666667 14.9333333 6.4 14.9333333 10.6666667"></Polyline>
                    <Polyline id="Path-22" points="32 10.6666667 27.7333333 6.4 27.7333333 10.6666667"></Polyline>
                    <Path d="M14.9333333,4.26666667 C14.9333333,1.42222222 16.3555718,7.49150693e-15 19.2000488,8.26366608e-15 C21.3333822,0.00986180702 21.3333822,7.10542736e-15 23.78528,7.10542736e-15 C27.7333822,7.10542736e-15 27.7333822,4.26666667 27.7333822,4.26666667" id="Path-23"></Path>
                    <Polyline id="Path-24" stroke-linecap="round" points="17.0666667 4.26666667 21.3333333 4.26666667 23.4666667 6.4 25.6 4.26666667"></Polyline>
                    <Path d="M17.0666667,8.64 L25.6,8.64" id="Path-25" stroke-linecap="round"></Path>
                </G>
            </G>
        </Svg>
  );
}


export { MoFo };
