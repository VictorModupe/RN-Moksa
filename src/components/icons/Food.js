import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const Food = ({width, height, style}) => {
  return (   
        <Svg style={style} width={width} height={height} viewBox={`0 0 34 32`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <G id="Menu" fill-rule="nonzero" stroke="#1A1919">
                    <Path d="M2.48689958e-13,4.2384106 C4.22066027,9.88962472 7.04626733,12.7152318 8.47682119,12.7152318 C9.90737505,12.7152318 12.0265803,14.1280353 14.8344371,16.9536424" id="Path-3" stroke-linecap="round"></Path>
                    <Path d="M2.75496689,4.2384106 L8.05298013,9.53642384" id="Path-6" stroke-linecap="round"></Path>
                    <Path d="M4.2384106,2.75496689 L9.53642384,8.05298013" id="Path-7" stroke-linecap="round"></Path>
                    <Path d="M4.2384106,-1.42108547e-14 C9.88962472,4.2384106 12.7152318,7.06401766 12.7152318,8.47682119 C12.7152318,9.88962472 14.1280353,12.00883 16.9536424,14.8344371" id="Path-8" stroke-linecap="round"></Path>
                    <Path d="M19.0728477,21.192053 C26.1368653,28.2560706 29.6688742,31.7880795 29.6688742,31.7880795 C31.7880795,31.7880795 31.7880795,31.7880795 31.7880795,29.6688742 C31.7880795,29.6688742 28.2560706,26.1368653 21.192053,19.0728477" id="Path-9" stroke-linecap="round"></Path>
                    <Path d="M4.2384106,29.6705248 C22.1502239,11.3852243 32.0398486,1.49559959 33.9072848,0.00165065682 C34.1317381,-0.167479983 31.8239001,12.7168824 25.4304636,12.7168824 C25.4304636,12.7168824 6.35761589,31.7897301 6.35761589,31.7897301" id="Path-10" stroke-linecap="round"></Path>
                </G>
            </G>
        </Svg>
  );
}


export { Food };
