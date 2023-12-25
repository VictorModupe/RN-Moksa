import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const Logout = ({width, height, fill, stroke, viewbox, style, hasNew}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`0 0 34 32`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <G id="Menu" transform="translate(-29.000000, -509.000000)" fill-rule="nonzero" stroke="#1A1919">
                    <G id="Group-3" transform="translate(25.000000, 103.000000)">
                        <G id="Group-12" transform="translate(21.000000, 422.000000) scale(-1, 1) translate(-21.000000, -422.000000) translate(5.000000, 406.000000)">
                            <G id="Group-11">
                                <Path d="M-9.76996262e-15,4.26666667 L7.74708813,1.11864355 C8.77039945,0.70282181 9.93704731,1.19528942 10.3528691,2.21860074 C10.4500374,2.45772595 10.5,2.71339915 10.5,2.9715126 L10.5,29.0284874 C10.5,30.1330569 9.6045695,31.0284874 8.5,31.0284874 C8.24188655,31.0284874 7.98621334,30.9785248 7.74708813,30.8813564 L-9.76996262e-15,27.7333333 L-9.76996262e-15,4.26666667 Z" id="Path-40" stroke-linecap="round"></Path>
                                <Path d="M12.6,2.13333333 L19,2.13333333 C20.1045695,2.13333333 21,3.02876383 21,4.13333333 L21,13.2266667" id="Path-41" stroke-linecap="round"></Path>
                                <Path d="M12.6,29.8666667 L19,29.8666667 C20.1045695,29.8666667 21,28.9712362 21,27.8666667 L21,19.2" id="Path-42"></Path>
                            </G>
                            <G id="Group-7" transform="translate(15.000000, 13.000000)" stroke-linecap="round">
                                <Polyline id="Path-43" points="15 0.5 17 3.5 15 6.5"></Polyline>
                                <Path d="M17,3.5 L0,3.5" id="Path-44"></Path>
                            </G>
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
  );
}

export { Logout };
