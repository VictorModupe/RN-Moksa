import React, { Component } from 'react';
import Svg, { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const Taster = ({width, height, fill, stroke, viewbox, style, hasNew}) => {

  return (   
        <Svg style={style} width={width} height={height} viewBox={`0 0 500 500`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
            <G>
                <Path fill="#C2C5C9" d="M298,433.7h-88l44-29.3L298,433.7z"/>
                <Path fill="#C2C5C9" d="M254,441.1c-4,0-7.3-3.3-7.3-7.3V243.3c0-4,3.3-7.3,7.3-7.3s7.3,3.3,7.3,7.3v190.5
                    C261.3,437.8,258,441.1,254,441.1z"/>
                <Path fill="#DDE0E4" d="M356.6,441.1H151.4c-4,0-7.3-3.3-7.3-7.3s3.3-7.3,7.3-7.3h205.1c4,0,7.3,3.3,7.3,7.3S360.6,441.1,356.6,441.1z
                    "/>
                <G>
                    <Path fill="#A91E22" d="M385.8,228.1c0,72.8-59,131.8-131.8,131.8s-131.8-59-131.8-131.8S181.2,81.6,254,81.6
                        C326.8,81.7,385.8,155.3,385.8,228.1z"/>
                    <G>
                        <Path fill="#DDE0E4" d="M385.8,228c0.4-76.3-45.6-161.1-45.6-161.1H167.9c0,0-46,84.9-45.7,161.2l0,0c0,18,3.6,35.2,10.2,50.9h243.2
                            C382.2,263.4,385.8,246.2,385.8,228C385.8,228.1,385.8,228.1,385.8,228z"/>
                    </G>
                </G>
            </G>
            <Path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M278.3,218c0.1,0.2,0.1,0.5,0.1,0.7c0.1,0.7,0.1,1.5,0.1,2.2c0,2.1,0.1,4,0,6c-0.1,0.9-0.3,1.8-0.3,2.7
                c0,0.7,0.1,1.4,0.1,2c0,0.6,0,1.1,0,1.9c0,0.9,0.3,1.8,0.2,2.8c0,0.9-0.2,1.8-0.1,2.9c0,0.8,0.2,1.5-0.3,1.7c-0.2,0.1-0.7,0-1,0
                c-0.7,0-1.3-0.1-2-0.1c-0.3,0-0.6,0-1-0.1c-0.7-0.2-0.6-0.9-0.7-1.8c-0.1-1.4-0.1-2.7-0.1-4.1c0.1-0.9,0.1-1.8,0.1-2.7
                c0-0.4,0-0.9,0-1.4c0-0.4,0.1-0.9-0.2-1.2c-0.4,0-0.5,0.3-0.6,0.6c-0.4,0.7-0.9,1.3-1.4,1.9c-0.7,0.8-1.5,1.5-2.2,2.3
                c-0.3,0.4-0.7,0.8-1,1.2c-0.4,0.4-0.8,0.7-1.2,1c-0.4,0.3-0.9,0.6-1.4,0.9c-0.2,0.1-0.5,0.2-0.8,0.4c-0.2,0.1-0.5,0.3-0.6,0.6
                c0,0.4,0.8,0.7,1.2,0.9c0.5,0.3,0.9,0.5,1.3,0.8c0.4,0.3,0.8,0.6,1.2,0.9c0.4,0.3,0.7,0.7,1,1c0.6,0.7,1.4,1.4,2,2.1
                c0.3,0.3,0.6,0.7,1,1.1c0.3,0.4,0.6,0.7,0.9,1.2c0.2,0.5,0.5,0.9,0.7,1.4c0.2,0.4,0.5,0.9,0.7,1.3c0.3,0.4,0.5,0.9,0.7,1.4
                c0.2,0.5,0.3,1,0.5,1.6c0.3,1,0.4,2.3,0.7,3.4c0.2,0.5,0.3,1.1,0.4,1.6c0,0.3,0,0.7,0,1c0,0.4,0,0.7,0,1c-0.1,0.2-0.3,0.3-0.5,0.4
                c-0.3,0-0.7,0-1,0c-0.7,0-1.4,0-2,0.1c-0.6,0-1.1,0.1-1.3-0.3c-0.1-0.3-0.1-0.7-0.1-1.1c0-0.4,0-0.7,0-1.1c-0.1-0.6-0.3-1.2-0.4-1.8
                c-0.1-0.5-0.3-1.1-0.5-1.7c-0.1-0.6-0.3-1.1-0.6-1.6c-0.3-0.5-0.6-0.9-0.8-1.4c-0.2-0.5-0.4-1-0.7-1.6c-0.2-0.5-0.6-0.9-1-1.3
                c-0.4-0.3-0.8-0.7-1.2-1.1c-0.4-0.4-0.7-0.8-1.1-1.1c-0.4-0.4-0.8-0.7-1.2-1c-0.4-0.3-0.8-0.7-1.3-0.9c-0.2-0.1-0.5-0.2-0.8-0.3
                c-1.3-0.5-2.6-1.1-4.1-1.4c-0.9-0.2-1.8-0.4-2.7-0.6c-0.3-0.1-0.6-0.1-0.9-0.2c-0.4,0-0.7,0-1.1,0c-0.3,0-0.7,0-1,0.1
                c-0.6,0.1-1.2,0.3-1.8,0.5c-0.6,0.2-1.1,0.3-1.7,0.5c-0.6,0.1-1.1,0.4-1.6,0.6c-0.5,0.3-0.9,0.6-1.4,0.9c-0.4,0.3-0.9,0.6-1.3,0.9
                c-0.4,0.3-0.8,0.6-1.2,1c-0.4,0.4-0.8,0.7-1.2,1.1c-0.8,0.8-1.5,1.5-2.2,2.3c-0.3,0.4-0.7,0.8-1,1.3c-0.3,0.5-0.5,1-0.8,1.5
                c-0.3,0.5-0.5,1-0.6,1.6c-0.2,0.5-0.4,1.2-0.5,1.7c-0.1,0.6-0.1,1.4-0.2,2.1c0,0.3-0.1,0.7-0.1,1c-0.1,0.7,0,1.3-0.6,1.5
                c-0.2,0.1-0.6,0.1-1,0.1c-0.7,0-1.4,0-2.1-0.1c-0.6-0.1-1.2-0.1-1.4-0.6c-0.1-0.2,0-0.6,0-1c0-0.9,0.1-1.9,0.2-2.8
                c0.1-0.5,0.3-1.1,0.5-1.6c0.7-2,1.6-3.8,2.4-5.7c0.2-0.5,0.4-0.9,0.6-1.4c0.5-0.8,1.3-1.3,1.9-2.2c0.3-0.4,0.6-0.8,0.9-1.2
                c0.3-0.4,0.6-0.7,1-1c0.7-0.6,1.4-1.2,2.3-1.8c0.4-0.3,0.8-0.6,1.2-0.8c0.4-0.2,1.1-0.5,1.1-0.9c0-0.3-0.3-0.4-0.5-0.6
                c-0.5-0.3-1-0.4-1.4-0.7c-0.6-0.4-1.2-1-1.7-1.5c-0.4-0.3-0.8-0.6-1.2-1c-0.4-0.3-0.8-0.6-1.2-1c-0.7-0.8-1.1-1.7-1.7-2.6
                c-0.1-0.2-0.3-0.4-0.5-0.6c-0.1-0.2-0.4-0.5-0.6-0.5c-0.1,0-0.3,0.2-0.3,0.4c0,0.2,0,0.4,0,0.6c0.1,1-0.1,1.6-0.2,2.5
                c0,0.4,0,0.9,0,1.3c0,0.9,0,1.7,0,2.7c0,0.4,0,0.8,0,1.4c0,0.8,0.1,1.4-0.5,1.6c-0.5,0.1-1.3,0-2,0c-0.3,0-0.6,0.1-1,0.1
                c-0.6,0-1.1,0.1-1.3-0.4c-0.1-0.2-0.1-1-0.1-1.4c0-0.5,0-1,0-1.4c0-0.5-0.1-1-0.1-1.4c0-0.5,0.1-0.9,0.1-1.4c0.1-0.9,0.1-1.9,0-2.8
                c0-1,0-2,0-2.8c0-1-0.1-1.9-0.1-2.8c0-0.5,0-1,0.1-1.4c0-1-0.1-1.9-0.1-2.9c0-0.9,0.3-1.7,0.2-2.8c0-0.4-0.2-1,0-1.4
                c0.1-0.2,0.3-0.4,0.6-0.4c0.4,0,0.8,0.1,1.3,0.1c1,0,1.8,0,2.8,0c0.7,0,1.3-0.1,1.7,0.2c0.2,0.2,0.2,0.5,0.3,0.8
                c0.2,0.9,0.4,1.9,0.5,2.8c0.2,1.3,0.8,2.2,1.1,3.3c0.2,0.6,0.3,1.1,0.6,1.6c0.2,0.5,0.5,0.9,0.8,1.4c0.3,0.4,0.6,0.9,0.9,1.3
                c0.7,0.8,1.3,1.6,2.1,2.3c0.2,0.2,0.4,0.4,0.6,0.6c0.2,0.2,0.4,0.3,0.7,0.4c0.5,0.3,0.9,0.5,1.4,0.8c0.9,0.5,2,1,3,1.4
                c0.5,0.2,1,0.5,1.5,0.7c0.6,0.2,1.2,0.3,1.8,0.4c0.3,0,0.7,0,1,0c1-0.1,2.1-0.1,3.1-0.2c0.6-0.1,1.3-0.1,1.9-0.3
                c0.6-0.1,1.2-0.2,1.8-0.4c0.6-0.2,1.1-0.3,1.6-0.6c0.5-0.2,1-0.5,1.5-0.7c0.5-0.2,0.9-0.5,1.3-0.9c0.8-0.7,1.7-1.3,2.4-2
                c0.4-0.3,0.7-0.7,1-1.2c0.6-0.8,1.2-1.7,1.8-2.6c0.3-0.4,0.6-0.9,0.8-1.4c0.3-0.5,0.5-1,0.7-1.5c0.2-0.6,0.3-1.1,0.4-1.8
                c0.3-1.1,0.4-2.2,0.5-3.4c0-0.2,0-0.3,0-0.5c0.1-0.3,0.2-0.5,0.5-0.5c0.4-0.1,1,0,1.6-0.1c1.1,0,2-0.1,3.1-0.1
                C277.2,217.6,278.1,217.4,278.3,218z M291.5,273.3l-0.1,0.2c-0.2,0.9-0.7,1.4-0.9,2.1c-0.2,0.6-0.5,1.2-0.7,1.9
                c0.3-0.1,0.5-0.1,0.8-0.1c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.3,0,0.6,0,0.9,0h0.6c0.2,0,0.5,0,0.7,0c-0.1-0.2-0.2-0.4-0.3-0.7
                c-0.1-0.3-0.2-0.5-0.3-0.7c-0.3-0.3-0.6-1.1-0.8-1.6C292,274.4,291.7,273.5,291.5,273.3z M237.5,271.1c-0.6,0-1,0.3-2,0.5
                c-0.2,0-1,0.2-1.5,0.9c0,0.1-0.1,0.3-0.2,0.4c-0.2,0.2-0.3,0.5-0.5,0.8c-0.2,0.3-0.3,0.7-0.3,1c0,0.1,0,0.2,0,0.3
                c0,0.3-0.1,0.5-0.1,0.8l0,0.1l0,0.1c0,0.4,0.4,0.9,0.6,1.4c0-0.1,0,0.5,0.4,0.9c0.8,0.8,1.2,0.9,2.1,1.2c0.5,0.1,1.1,0.3,1.8,0.3
                c0.3,0,0.5-0.1,0.7-0.2c0.7-0.3,1.2-0.7,1.6-1.1c0.6-0.9,1.1-1.2,1.1-3.2c0-0.2-0.1-0.5-0.1-0.8c-0.2-0.5-0.4-1-0.6-1.5
                c-0.3-0.4-0.4-0.7-1.7-1.4C238.5,271.5,238.2,271.1,237.5,271.1z M291.6,269.4c0.5,0,0.4,0.4,0.7,1.1c0,0,0.7,1.4,1.1,2.2
                c0.2,0.5,0.4,1,0.6,1.4c0.4,0.5,0.5,1.4,0.9,2c0.4,0.7,0.8,1.5,1,2.3c0.1,0.3,0.3,0.5,0.4,0.9c0.1,0.3,0.2,0.6,0.3,0.8
                c0.1,0.2,0.6,0.6,0.6,0.9l0,0.1c0,0.1,0,0.1,0.1,0.2c0,0.2-0.2,0.2-0.5,0.2c-0.8,0-1,0-1.4,0c-0.4,0-0.7-0.6-0.8-1
                c-0.1-0.5-0.4-0.6-0.6-1.4c-0.2,0-0.6,0-0.8,0c-0.3,0-0.5,0-0.8,0c-0.8,0-1.2-0.1-2.3-0.1c-0.3,0-0.9,0.1-1.3,0.1c0,0-0.1,0-0.1,0
                c-0.2,0.3-0.4,0.8-0.5,1.2c-0.1,0.1-0.4,1.2-0.8,1.2c-0.7,0-1,0.1-1.5,0.1c-0.2,0-0.4-0.2-0.5-0.4c0.1-0.2,0.1-0.4,0.3-0.5
                c0.2-0.1,0.2-0.3,0.4-0.7c0-0.2,0.5-0.6,0.7-1.6c0.2-0.6,0.4-1.3,0.7-1.9c0.2-0.6,0.6-1.1,0.8-1.5c0.4-0.7,0.7-1.3,0.9-1.9
                c0.1-0.4,0.4-0.5,0.7-1.1c0.1-0.4,0.4-0.5,0.6-1.2c0.1-0.2,0.3-0.6,0.3-0.7C291,270,291.2,269.4,291.6,269.4z M253.5,269.4
                c0.2,0,0.5,0.1,0.5,0.3c0,0.1,0,0.3,0,0.4c0,0.1,0,0.3,0,0.4l0,0.1v0.3c0,0.3,0,0.7,0,1c0,0.5-0.1,1-0.1,1.4c0,0.3,0,0.7,0,1
                c0,0.2,0,0.4,0,0.6l0,0.1v0.1c0.1,0,0.3-0.4,0.4-0.5c0.1-0.2,0.4-0.3,0.5-0.4c0.4-0.6,0.9-1.2,1.5-1.7c0.5-0.7,1.1-1.4,1.7-2
                c0.9-1.2,1-1.2,1.9-1.2c0.3,0,0.5,0.1,0.9,0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.4,0.1,0.4,0.3c0,0.2-0.2,0.2-0.4,0.4
                c-0.3,0.4-0.5,0.7-0.9,1c-0.5,0.5-1,1.1-1.5,1.7c-0.2,0.3-1,1.1-1.8,2c-0.3,0.4-0.5,0.7-0.8,0.9c0.4,0.3,0.6,0.5,1,0.9
                c0.3,0.4,0.7,0.8,1.2,1.2c0.3,0.3,0.7,0.8,1.3,1.3c0.2,0.2,0.7,0.8,1.1,1.1c0.1,0.1,0.6,0.3,0.8,0.7l0,0c0.1,0.1,0.4,0.2,0.4,0.4
                c0,0.3-0.7,0.3-0.8,0.3c-0.7,0-1.1-0.1-1.5-0.1c0,0-0.1,0-0.1,0c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.2-0.5-0.4-0.7-0.6
                c-0.2-0.2-0.4-0.3-0.5-0.4c-1-0.9-1.1-1.2-1.7-1.8c-0.3-0.5-0.8-0.9-1.3-1.3c-0.4-0.2-0.7-0.5-0.9-0.9l0-0.1v0.1
                c0,0.2,0.1,0.5,0.1,0.8c0,0.1,0,0.3,0,0.4c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.6,0.1,0.9c0,0.1,0.1,0.5,0.1,0.8
                c-0.1,0.3-0.1,0.6-0.1,0.9c0,0.2,0.1,0.4,0.1,0.6c0,0.4-0.7,0.3-1,0.3c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0.1-0.3,0.1
                c-0.5,0-0.6-0.4-0.6-1.2c0-0.2,0.1-0.7,0.1-1.4c0-0.3,0-0.5,0-0.8c0-0.3,0-0.5,0-0.8c0-0.5,0-0.9,0-1.4c0-0.6,0-1,0-1.3
                c0-0.2-0.1-0.5-0.1-0.7c0-0.7,0.1-1.3,0.1-1.9c0-0.1-0.1-0.3-0.1-0.4c0-0.6,0.1-1,0.1-1.4c0-0.3-0.1-0.5-0.1-0.7
                c0-0.3,0.2-0.3,0.5-0.3c0.1,0,0.3,0,0.4,0C252.9,269.4,253.3,269.4,253.5,269.4z M222.5,269.3c0.4,0,0.6,0.3,0.6,0.7
                c0,0.7-0.1,1.4-0.1,2.1c0,0.8,0.1,1.5,0.2,2.2c0.1,0.7,0.1,1.4,0.1,2.1c0,0.2,0,0.5,0,0.7c0,0.4,0.1,0.9,0.1,1.3
                c0,0.5-0.1,1.1-0.1,1.4c0,0.1,0.1,0.3,0.1,0.4c0,0.2,0,0.3,0,0.4c0,0.2,0.1,0.3,0.1,0.5c0,0.1-0.1,0.2-0.1,0.4c0,0,0,0.1,0,0.1
                c-0.1,0.2-0.1,0.3-0.3,0.3c-0.1,0-0.2,0-0.3,0c-0.1,0-0.3,0.1-0.4,0.1c-0.8,0-1.3-0.1-1.3-1.2c0-0.1,0-0.2,0-0.3l0-0.1v-0.2
                c0-0.5,0.1-1,0.1-1.6c0-0.4-0.1-0.9-0.1-1.3c0-0.1,0.1-0.3,0.1-0.4l0-0.1v-1.4c0,0-0.1,0-0.1,0l0,0v-0.1c0,0,0,0,0,0
                c-0.1,0.1-0.2,0.3-0.3,0.5c-0.2,0.2-0.4,0.4-0.6,1.3c-0.2,0.4-0.4,0.7-0.6,1.1c-0.4,0.5-0.8,1-1,1.6c-0.2,0.5-0.4,1-0.6,1.4
                c-0.2,0.3-0.1,0.8-0.9,0.8c-0.5,0-0.8-1-0.8-1.1c-0.1-0.2-0.3-0.4-0.4-0.6c-0.4-0.7-0.8-1.4-1.2-2.2c-0.1-0.5-0.8-1.6-0.9-1.7
                c-0.2-0.4-0.4-0.9-0.7-1.2c-0.1,0.7-0.1,1.5-0.1,2.1c0,0.3,0.1,0.7,0.1,1c0,0.7-0.1,1.3-0.1,2c0,0.4,0,0.8,0,1.2
                c0,0.5-1.1,0.3-1.4,0.3c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0-0.5-0.2-0.5-0.4c0-0.1,0-0.1,0-0.2c0-0.3-0.1-0.5-0.1-0.8
                c0-1.3,0.1-1.5,0.1-2.6c0-0.7,0.1-1.1,0.2-1.6c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4,0-0.6c0-0.6-0.1-1-0.1-1.9c0-0.9,0.2-1.9,0.2-2.6
                c0-0.3-0.1-0.5-0.1-0.8c0-0.3,0-0.7,0.4-0.7c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.1,0,0.2,0c0.5,0,0.5,0.5,0.6,0.6
                c0.1,0.2,0.3,0.3,0.4,0.9c0.3,0.2,0.7,1.1,0.7,1c0.2,0.4,0.7,0.9,0.9,1.5c0.1,0.4,0.3,0.8,0.6,1.2c0.3,0.3,0.6,1,0.7,1.1
                c0.3,0.5,0.5,0.9,0.9,1.4c0.2,0.3,0.3,0.7,0.5,1c0.1-0.1,0.1-0.3,0.2-0.5c0.8-0.8,1.2-2,1.3-2.3c0.4-0.7,0.9-1.3,1.1-1.8
                c0.2-0.5,0.4-1,0.7-1.5c0.2-0.5,0.8-1.2,0.8-1.4c0.4-0.8,0.1-1.4,0.9-1.4C222.3,269.3,222.4,269.3,222.5,269.3z M274.8,269.3
                c1,0.2,1,0.2,1.1,0.2c0.4,0.1,0.8,0.2,1.2,0.3c0.3,0.1,0.6,0.2,0.6,0.6c0,0.2-0.3,0.7-0.3,0.7c0,0.3-0.1,0.8-0.5,0.8
                c-0.4,0-0.5-0.4-0.8-0.4c-0.7-0.1-1.1-0.3-1.8-0.3c-1.2,0-1.2,0.4-1.3,0.6c-0.1,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.6,0.2,0.9
                c0.1,0.1,0.2,0.2,0.2,0.3c0.5,0.2,1.1,0.3,1.5,0.5c0.3,0.2,0.7,0.4,1,0.5c0.5,0.3,1,0.6,1.4,0.9c0.8,0.6,1.2,1,1.3,1.8
                c0.1,0.3,0,0.4,0,0.9c0,0.8-0.3,1.2-0.5,1.6c-0.1,0.2-0.5,0.7-0.7,0.8c-0.3,0.1-0.6,0.3-0.9,0.5c-0.3,0.2-0.5,0.2-0.8,0.2
                c-0.3,0.1-0.6,0.2-0.9,0.2c-0.4,0-0.9-0.2-1.1-0.2c-0.7,0-1.4-0.2-2.1-0.5c-0.5-0.2-1.3-0.2-1.3-0.6c0-0.6,0.4-0.9,0.4-1
                c0-0.1,0-0.4,0.2-0.6c0-0.1,0-0.1,0.1-0.2s0.1-0.1,0.2-0.1c0.2,0,0.6,0.3,0.7,0.4c0.1,0.1,0.2,0.1,0.3,0.2c1,0.3,1.8,0.5,2.5,0.5
                c0.5,0,1-0.2,1.4-0.5c0.2-0.2,0.5-0.6,0.5-0.7c0-1.1-0.2-1-0.5-1.2c-0.4-0.2-0.5-0.4-0.9-0.6c-0.4-0.2-0.7-0.4-1-0.5
                c-1.1-0.2-2-0.6-2.5-1.4c-0.6-0.8-0.9-0.8-1-2.1c0-0.2,0-0.4,0-0.6c0.1-0.6,0.4-0.7,0.7-1.4c0.4-0.7,1.3-1.1,1.4-1.2
                c0.5-0.3,1-0.4,1.5-0.5C274.2,269.3,274.5,269.2,274.8,269.3z M238,269.2c0.2,0,1,0.3,1.8,0.4c0.7,0.1,1.3,0.8,1.9,1.2
                c0.2,0.2,0.8,0.6,1,0.9c0,0,0.5,0.7,0.5,1.3c0,0.4,0.1,0.8,0.3,1.2c0.1,0.6,0.3,1,0.3,1.3l0,0c0,0.3-0.1,0.7-0.1,1
                c0,0.1-0.2,0.2-0.2,0.8c0,0.1,0.1,0.2,0.1,0.4c0,0.4-0.3,0.8-0.7,1.3c-0.3,0.7-0.9,1.3-1.6,1.7c-0.3,0.2-1.9,1.3-3.8,1.3
                c-0.5,0-0.9-0.1-1.4-0.2c-0.8,0-1.3-0.3-2-0.5c-0.5-0.3-0.8-0.6-1.3-0.9c0,0-1.1-0.8-1.5-1.6c-0.1-0.1-0.1-0.4-0.2-0.6
                c-0.4-0.5-0.6-1.1-0.6-1.7c0-0.2,0-0.3,0-0.5c0-0.2-0.1-0.3-0.1-0.5c0-1.7,0.6-2.2,0.9-3.1c0.2-0.5,0.7-0.9,1-1.2
                c0.2-0.2,0.4-0.5,0.6-0.6c0.1-0.1,0.3-0.1,0.4-0.2c0.2-0.1,0.3-0.2,0.5-0.3c0.3-0.3,1.2-0.5,1.8-0.5c0.1,0,0.2,0,0.2,0
                c0.5,0,0.9-0.3,1.5-0.3C237.7,269.2,237.8,269.2,238,269.2z M257.6,288.8C257.6,288.8,257.6,288.8,257.6,288.8L257.6,288.8
                C257.6,288.8,257.6,288.8,257.6,288.8C257.6,288.8,257.6,288.8,257.6,288.8z M236.6,288.9l0.1,0v0L236.6,288.9z M257.3,288.9
                L257.3,288.9C257.3,288.9,257.3,288.9,257.3,288.9L257.3,288.9L257.3,288.9C257.3,288.9,257.3,288.9,257.3,288.9z M228.7,288.9
                L228.7,288.9C228.6,288.9,228.7,288.9,228.7,288.9L228.7,288.9L228.7,288.9z M236.3,288.9L236.3,288.9
                C236.2,288.9,236.3,288.9,236.3,288.9L236.3,288.9z M263.8,288.9c0,0-0.1,0-0.1,0.1l-0.1,0L263.8,288.9L263.8,288.9
                C263.8,288.9,263.8,288.9,263.8,288.9z M277.1,289L277.1,289C277.1,289,277.1,289,277.1,289L277.1,289
                C277.1,289,277.1,289,277.1,289z M235.2,288.9C235.2,288.9,235.2,288.9,235.2,288.9C235.2,289,235.2,288.9,235.2,288.9L235.2,288.9
                C235.2,288.9,235.2,288.9,235.2,288.9z M228.2,288.9C228.2,288.9,228.2,288.9,228.2,288.9C228.2,289,228.2,288.9,228.2,288.9
                L228.2,288.9C228.2,288.9,228.2,288.9,228.2,288.9z M277.3,289C277.3,289,277.3,289,277.3,289L277.3,289
                C277.3,289,277.4,289,277.3,289l0.1,0C277.4,289,277.3,289,277.3,289z M222.4,289L222.4,289C222.4,289,222.4,289,222.4,289
                L222.4,289C222.5,289,222.4,289,222.4,289z M245.1,288.9c0,0.1,0,0.1-0.1,0.2l0,0L245.1,288.9C245.1,288.9,245.1,288.9,245.1,288.9z
                M236,289L236,289C236,289,236,289,236,289C236,289,236,289,236,289L236,289z M250.2,288.9l0,0.1l0,0h0L250.2,288.9z M264.7,289
                c0.1,0,0.1,0.1,0.2,0.1C264.9,289,264.7,289,264.7,289z M229.2,289.1L229.2,289.1C229.2,289.1,229.2,289.1,229.2,289.1
                C229.2,289.1,229.2,289.1,229.2,289.1C229.2,289.1,229.2,289.1,229.2,289.1z M221.3,289C221.3,289,221.3,289,221.3,289
                c0,0,0,0.1,0,0.1l0,0l0,0L221.3,289z M263.1,289.1L263.1,289.1L263.1,289.1L263.1,289.1z M284.5,289.1
                C284.5,289.1,284.4,289.1,284.5,289.1C284.5,289.1,284.5,289.1,284.5,289.1C284.5,289.1,284.5,289.1,284.5,289.1z M241.7,289
                C241.7,289,241.7,289,241.7,289c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0l0,0l0,0l0,0C241.7,289,241.7,289,241.7,289z M222.6,289.1
                L222.6,289.1C222.6,289.1,222.6,289.1,222.6,289.1L222.6,289.1C222.6,289.1,222.6,289.1,222.6,289.1z M277.7,289.2L277.7,289.2
                L277.7,289.2L277.7,289.2L277.7,289.2L277.7,289.2z M264.7,289.2L264.7,289.2L264.7,289.2L264.7,289.2L264.7,289.2L264.7,289.2z
                M243.3,289c0,0.1,0,0.1-0.1,0.2l0,0L243.3,289C243.3,289,243.3,289,243.3,289z M276.5,289.2L276.5,289.2L276.5,289.2L276.5,289.2z
                M276.5,289.2C276.4,289.2,276.4,289.2,276.5,289.2C276.4,289.3,276.4,289.3,276.5,289.2L276.5,289.2L276.5,289.2
                C276.5,289.2,276.5,289.2,276.5,289.2z M229.5,289.1C229.5,289.1,229.5,289.1,229.5,289.1c0.1,0.1,0.1,0.1,0.2,0.2l0,0.1l0,0
                c0,0-0.1-0.1-0.1-0.1C229.6,289.1,229.5,289.1,229.5,289.1z M229.7,289.3L229.7,289.3L229.7,289.3L229.7,289.3z M243.5,289.1
                C243.5,289.1,243.5,289.1,243.5,289.1c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0C243.6,289.2,243.5,289.2,243.5,289.1z
                M263.1,289.1c-0.1,0-0.2,0.1-0.2,0.2C263,289.2,263.1,289.2,263.1,289.1L263.1,289.1z M229.8,289.3L229.8,289.3
                C229.8,289.3,229.8,289.3,229.8,289.3C229.8,289.3,229.8,289.3,229.8,289.3C229.8,289.3,229.8,289.3,229.8,289.3z M276.1,289.2
                c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.2h0C276,289.4,276,289.3,276.1,289.2C276.1,289.2,276.1,289.2,276.1,289.2L276.1,289.2z
                M222.7,289.3C222.7,289.3,222.8,289.4,222.7,289.3c0.1,0.1,0.1,0.1,0.1,0.2l0,0C222.8,289.4,222.8,289.4,222.7,289.3
                C222.8,289.4,222.8,289.4,222.7,289.3L222.7,289.3C222.8,289.3,222.8,289.3,222.7,289.3C222.7,289.3,222.7,289.3,222.7,289.3z
                M235.2,289.3l0,0.1l0,0h0L235.2,289.3z M228.2,289.3l0,0.1l0,0h0L228.2,289.3z M283,289.4C283,289.4,282.9,289.4,283,289.4
                c-0.1,0.1-0.1,0.1-0.1,0.1C283,289.5,283,289.4,283,289.4L283,289.4z M275.8,289.5C275.8,289.5,275.8,289.5,275.8,289.5
                C275.8,289.5,275.8,289.5,275.8,289.5L275.8,289.5C275.8,289.5,275.8,289.5,275.8,289.5z M222.8,289.5
                C222.8,289.5,222.8,289.5,222.8,289.5L222.8,289.5C222.8,289.5,222.8,289.5,222.8,289.5L222.8,289.5z M222.9,289.5
                C222.9,289.5,222.9,289.6,222.9,289.5c0,0.1,0,0.1,0,0.1C222.9,289.7,222.9,289.7,222.9,289.5C222.9,289.6,222.9,289.5,222.9,289.5z
                M249.9,289.3L249.9,289.3C249.9,289.4,249.9,289.4,249.9,289.3c0,0.1,0,0.1,0,0.1c0,0,0,0,0,0v0c0,0.1,0,0.1,0,0.2l0,0
                C249.9,289.6,249.9,289.4,249.9,289.3L249.9,289.3z M255.6,289.4L255.6,289.4C255.6,289.4,255.6,289.4,255.6,289.4
                c0,0.1,0,0.1,0,0.1l0,0c0,0,0,0,0,0v0c0,0,0,0.1,0,0.1l0,0l0,0C255.6,289.6,255.6,289.4,255.6,289.4L255.6,289.4z M285,289.4
                c0,0,0.1,0.2,0.1,0.3C285.2,289.6,285.2,289.6,285,289.4z M250.1,289.6L250.1,289.6c0,0,0,0.1,0,0.1l0,0l0,0c0,0,0,0,0,0
                C250.1,289.6,250.1,289.6,250.1,289.6z M282.7,289.7C282.7,289.7,282.7,289.8,282.7,289.7C282.7,289.8,282.7,289.8,282.7,289.7z
                M235.4,289.8C235.4,289.8,235.4,289.8,235.4,289.8C235.4,289.8,235.4,289.8,235.4,289.8C235.4,289.8,235.4,289.8,235.4,289.8z
                M228.4,289.8C228.4,289.8,228.4,289.8,228.4,289.8C228.4,289.8,228.4,289.8,228.4,289.8L228.4,289.8
                C228.4,289.8,228.4,289.8,228.4,289.8z M243.8,289.8L243.8,289.8C243.8,289.8,243.8,289.8,243.8,289.8
                C243.8,289.9,243.8,289.9,243.8,289.8C243.8,289.9,243.8,289.9,243.8,289.8L243.8,289.8z M242,289.8L242,289.8
                C242,289.8,242,289.8,242,289.8C242,289.9,242,289.9,242,289.8C242,289.9,242,289.9,242,289.8L242,289.8z M221.6,289.7
                C221.5,289.7,221.5,289.7,221.6,289.7c0,0,0,0.1,0,0.1l0,0l0,0L221.6,289.7z M222.2,289.2C222.2,289.2,222.1,289.2,222.2,289.2
                l-0.3,0c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0v0.7c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.4,0l0,0c0,0,0,0,0,0l0.1,0c0.1,0,0.2-0.1,0.2-0.1
                c0,0,0.1-0.1,0.1-0.2l0,0v-0.1c0-0.1,0-0.1-0.1-0.2l-0.1,0c0,0,0,0,0,0l0,0C222.3,289.2,222.2,289.2,222.2,289.2z M256,289.7
                L256,289.7C256,289.7,256,289.7,256,289.7c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0
                C256.2,289.9,256.1,289.8,256,289.7z M236.6,290.1L236.6,290.1L236.6,290.1L236.6,290.1L236.6,290.1z M262.6,290
                C262.6,290.1,262.6,290.1,262.6,290C262.6,290.1,262.6,290.1,262.6,290C262.6,290.1,262.6,290.1,262.6,290z M221.9,290.2
                L221.9,290.2c-0.1,0-0.2,0-0.1,0l0,0L221.9,290.2C221.9,290.2,221.9,290.2,221.9,290.2z M236.2,290.1L236.2,290.1
                C236.3,290.2,236.3,290.2,236.2,290.1C236.3,290.2,236.2,290.1,236.2,290.1z M285.4,290L285.4,290
                C285.4,290.1,285.4,290.1,285.4,290L285.4,290c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0C285.4,290.2,285.4,290.1,285.4,290L285.4,290z
                M235.9,290.3C235.9,290.3,235.8,290.3,235.9,290.3L235.9,290.3C235.9,290.3,235.9,290.3,235.9,290.3L235.9,290.3
                C235.9,290.3,235.9,290.3,235.9,290.3z M235.7,290.3c0,0-0.1,0-0.1,0L235.7,290.3C235.6,290.3,235.7,290.3,235.7,290.3L235.7,290.3
                C235.7,290.3,235.7,290.3,235.7,290.3z M228.9,289.2c-0.1,0-0.2,0-0.3,0l0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0
                c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0,0.2h0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l0,0c0.1,0,0.2,0,0.3-0.1
                c0.1-0.1,0.2,0,0.3-0.2c0,0,0-0.1,0-0.1v-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2-0.1-0.3c0-0.1-0.2-0.2-0.3-0.2c0,0,0,0,0,0h0
                C229,289.3,229,289.2,228.9,289.2z M264.3,290.3c0,0-0.1,0-0.1,0l-0.1,0l0,0C264.3,290.3,264.4,290.3,264.3,290.3
                C264.4,290.3,264.4,290.3,264.3,290.3z M250,290.3L250,290.3C250,290.3,250,290.3,250,290.3C250,290.3,250,290.3,250,290.3z
                M256.4,290.2L256.4,290.2c0,0,0.1,0.1,0.1,0.1l0,0l0,0C256.5,290.3,256.4,290.2,256.4,290.2z M256.5,290.3L256.5,290.3L256.5,290.3
                L256.5,290.3z M262.9,290.3L262.9,290.3L262.9,290.3L262.9,290.3C262.9,290.3,262.9,290.3,262.9,290.3z M275.8,290.3L275.8,290.3
                C275.8,290.3,275.8,290.3,275.8,290.3C275.8,290.3,275.7,290.3,275.8,290.3C275.8,290.3,275.8,290.3,275.8,290.3z M250.1,290
                C250.1,290,250.1,290.1,250.1,290c0,0.1,0,0.1,0,0.1c0,0,0,0,0,0v0c0,0.1,0,0.1,0,0.2C250.1,290.4,250.1,290,250.1,290z
                M221.3,290.3C221.3,290.3,221.3,290.4,221.3,290.3C221.3,290.4,221.3,290.3,221.3,290.3L221.3,290.3
                C221.3,290.3,221.3,290.3,221.3,290.3z M229,290.4L229,290.4L229,290.4L229,290.4z M229,290.4c0,0-0.1,0-0.1,0L229,290.4
                C228.9,290.4,228.9,290.4,229,290.4L229,290.4L229,290.4C229,290.4,229,290.4,229,290.4z M244.7,290.3c0,0-0.1,0.1-0.1,0.1l0,0l0,0
                L244.7,290.3C244.7,290.3,244.7,290.3,244.7,290.3C244.7,290.3,244.7,290.3,244.7,290.3z M243,290.3c0,0-0.1,0.1-0.1,0.1l0,0l0,0
                L243,290.3C243,290.3,243,290.3,243,290.3C243,290.3,243,290.3,243,290.3z M229.7,290.3c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0,0,0l0,0
                c0,0,0.1,0,0.1-0.1C229.7,290.4,229.7,290.4,229.7,290.3z M235.3,290.5C235.3,290.5,235.2,290.6,235.3,290.5L235.3,290.5
                C235.2,290.6,235.2,290.6,235.3,290.5C235.3,290.6,235.3,290.6,235.3,290.5z M228.7,290.6l-0.1,0L228.7,290.6L228.7,290.6z
                M285.4,290.4c0,0.1,0,0.2,0,0.3l0,0l0-0.1C285.4,290.5,285.4,290.5,285.4,290.4L285.4,290.4z M255.6,290.5L255.6,290.5
                C255.6,290.6,255.6,290.6,255.6,290.5L255.6,290.5c0,0.1,0,0.1,0,0.1v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
                C255.6,290.6,255.6,290.6,255.6,290.5C255.6,290.5,255.6,290.5,255.6,290.5z M275.7,290.7c0,0.1,0.1,0.1,0.1,0.2
                C275.8,290.8,275.7,290.8,275.7,290.7C275.7,290.7,275.7,290.7,275.7,290.7z M257.4,290.5c0,0,0,0.3,0,0.4c0,0,0-0.1,0-0.1v-0.1
                C257.5,290.7,257.4,290.6,257.4,290.5z M262.9,290.8C262.9,290.8,262.9,290.9,262.9,290.8c0,0.1,0.1,0.1,0.1,0.1h0
                C262.9,290.9,262.9,290.9,262.9,290.8z M257,290.8L257,290.8c0,0.1,0.1,0.1,0.1,0.1c0,0,0,0,0,0C257.1,290.9,257,290.8,257,290.8z
                M229.4,290.9C229.4,290.9,229.4,290.9,229.4,290.9c0.1,0.1,0.1,0.1,0.1,0.1l0,0L229.4,290.9C229.4,290.9,229.4,290.9,229.4,290.9z
                M229.5,291L229.5,291L229.5,291L229.5,291z M221.7,290.3C221.7,290.3,221.7,290.3,221.7,290.3c-0.1,0.1-0.1,0.1-0.1,0.2l0,0v0
                c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0l0.1,0c0,0,0,0,0,0c0.1,0,0.2,0,0.2-0.1l0,0l0-0.1
                l0-0.1c0,0,0,0,0,0c0,0,0,0,0,0l0,0c-0.1-0.1-0.1-0.2-0.3-0.2l-0.1,0c0,0,0,0-0.1,0C222.1,290.3,221.9,290.3,221.7,290.3z
                M284.1,289.1c-0.2,0-0.3,0.1-0.4,0.1c-0.1,0-0.3,0.1-0.3,0.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.2-0.1,0.2l0,0.1
                c0,0.1,0,0.1,0,0.2c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.3,0.2,0.5,0.3c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.1,0,0.2,0
                c0.1-0.1,0.3-0.1,0.4-0.3c0.2-0.2,0.3-0.5,0.2-0.7c0,0,0-0.1,0-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.1-0.2-0.3-0.4-0.3
                C284.3,289.2,284.3,289.1,284.1,289.1z M283,291c0,0,0.1,0.1,0.2,0.1h0C283.1,291.1,283.1,291.1,283,291z M235.7,291.2l-0.1,0
                L235.7,291.2L235.7,291.2z M265,291l0,0.2h0L265,291L265,291z M286.9,291.2C286.9,291.2,286.9,291.2,286.9,291.2L286.9,291.2
                C286.9,291.2,286.9,291.2,286.9,291.2C286.9,291.2,286.9,291.2,286.9,291.2z M286.8,291.2C286.8,291.2,286.8,291.2,286.8,291.2
                L286.8,291.2C286.9,291.2,286.9,291.2,286.8,291.2C286.8,291.2,286.8,291.2,286.8,291.2z M235.1,290.9L235.1,290.9c0,0,0,0.3,0,0.3
                l0,0L235.1,290.9z M228.2,290.9c0,0,0,0.3,0,0.3l0,0l0,0V290.9z M222.8,291.2c0,0-0.1,0.1-0.1,0.1l0,0
                C222.7,291.3,222.8,291.3,222.8,291.2C222.8,291.2,222.8,291.2,222.8,291.2z M244.2,291.2L244.2,291.2
                C244.2,291.2,244.2,291.2,244.2,291.2C244.2,291.3,244.2,291.3,244.2,291.2C244.2,291.3,244.2,291.3,244.2,291.2
                C244.2,291.2,244.2,291.2,244.2,291.2z M242.4,291.2L242.4,291.2C242.4,291.2,242.4,291.2,242.4,291.2
                C242.4,291.3,242.4,291.3,242.4,291.2C242.4,291.3,242.5,291.3,242.4,291.2C242.4,291.2,242.4,291.2,242.4,291.2z M229.6,291.1
                c0,0.1,0.1,0.1,0.2,0.1C229.8,291.3,229.7,291.2,229.6,291.1C229.7,291.2,229.6,291.2,229.6,291.1z M276.3,291.2L276.3,291.2
                C276.3,291.2,276.3,291.2,276.3,291.2C276.3,291.2,276.4,291.2,276.3,291.2c0.1,0.1,0.2,0.1,0.2,0.1c0,0,0.1,0,0.1,0
                C276.5,291.3,276.4,291.3,276.3,291.2z M286.8,291.3C286.7,291.3,286.7,291.3,286.8,291.3C286.7,291.3,286.8,291.3,286.8,291.3
                L286.8,291.3C286.8,291.3,286.8,291.3,286.8,291.3C286.8,291.3,286.8,291.3,286.8,291.3z M236,291.3l-0.1,0L236,291.3L236,291.3z
                M250.1,291.3L250.1,291.3L250.1,291.3C250.1,291.3,250.1,291.3,250.1,291.3L250.1,291.3C250.1,291.3,250.1,291.3,250.1,291.3z
                M284.9,291.2c-0.1,0-0.1,0.1-0.2,0.1C284.8,291.3,284.9,291.3,284.9,291.2z M255.7,291.3L255.7,291.3L255.7,291.3
                C255.7,291.3,255.8,291.3,255.7,291.3C255.8,291.3,255.8,291.3,255.7,291.3C255.8,291.3,255.8,291.3,255.7,291.3z M221.3,291.2
                l0,0.1c0,0,0,0,0,0L221.3,291.2z M277.9,291.4L277.9,291.4L277.9,291.4L277.9,291.4L277.9,291.4z M277.5,291.4
                C277.4,291.4,277.4,291.4,277.5,291.4L277.5,291.4C277.4,291.4,277.4,291.4,277.5,291.4C277.4,291.4,277.5,291.4,277.5,291.4
                L277.5,291.4L277.5,291.4z M276.8,291.4C276.8,291.4,276.8,291.4,276.8,291.4L276.8,291.4C276.9,291.4,276.9,291.4,276.8,291.4
                c0.1,0,0.1,0,0.1,0C276.9,291.4,276.9,291.4,276.8,291.4z M221.7,291.4C221.7,291.4,221.7,291.4,221.7,291.4
                C221.7,291.4,221.7,291.4,221.7,291.4l0.1,0C221.9,291.4,221.8,291.4,221.7,291.4z M255.5,291.4L255.5,291.4L255.5,291.4
                L255.5,291.4z M255.4,291.4C255.4,291.4,255.4,291.4,255.4,291.4C255.5,291.4,255.5,291.4,255.4,291.4L255.4,291.4L255.4,291.4
                C255.5,291.4,255.4,291.4,255.4,291.4z M249.9,291.1c0,0,0,0.3,0,0.3l0,0l0,0V291.1z M283.6,291.4L283.6,291.4
                c0.1,0,0.2,0.1,0.2,0.1c0,0,0,0,0,0l-0.1,0L283.6,291.4z M263.9,291.4C263.9,291.4,263.9,291.4,263.9,291.4c0,0,0.1,0,0.1,0
                c0,0,0.1,0,0.1,0c0,0,0,0-0.1,0H264C264,291.4,264,291.4,263.9,291.4L263.9,291.4z M286.6,291.4
                C286.6,291.4,286.6,291.4,286.6,291.4C286.6,291.4,286.7,291.5,286.6,291.4C286.7,291.4,286.7,291.4,286.6,291.4L286.6,291.4z
                M236.7,291.5L236.7,291.5L236.7,291.5L236.7,291.5z M235.2,288.7c0.3,0,0.6,0,0.9,0c0.1,0,0.2,0,0.3,0c0.3,0,0.3,0,0.3,0.1
                c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1-0.1,0.1s-0.1,0-0.2,0h0c-0.1,0-0.2,0-0.3,0c0,0,0,0,0,0
                c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2
                c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0.1,0l0,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0
                c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.1,0-0.2,0-0.3,0
                c-0.2,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.4,0v0c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.1,0.2,0.1
                c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.3,0c0.2,0,0.3,0,0.3,0.1c0,0.3,0,0.3-0.1,0.3c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0
                c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.2,0-0.5,0-0.7,0c0,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.2-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0
                c0,0,0-0.1,0-0.3s0-0.3,0-0.5c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1
                c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.2c0-0.1,0-0.2,0.1-0.2c0,0,0,0,0,0C235.2,288.7,235.2,288.7,235.2,288.7z M250.1,288.8
                C250.1,288.8,250.2,288.8,250.1,288.8c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2,0,0.3v0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.4
                c0,0.2,0,0.4,0,0.5v0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2
                c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.1c0,0.1,0,0.1-0.1,0.1h-0.1c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1
                c0-0.1,0-0.1,0-0.2c0-0.2,0-0.3,0-0.4c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.7c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0
                c0,0,0,0,0,0c0-0.1,0-0.2,0-0.3v0c0,0,0,0,0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0.2-0.1C250,288.8,250.1,288.8,250.1,288.8z M221.2,288.8
                C221.3,288.8,221.3,288.8,221.2,288.8c0.1,0,0.2,0,0.3,0c0,0,0.1,0,0.1,0l0.1,0h0.2c0.1,0,0.2,0,0.3,0l0.1,0c0.1,0,0.3,0,0.4,0.1
                l0.1,0.1c0.1,0,0.1,0.1,0.2,0.2l0,0c0,0,0,0.1,0,0.1l0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1l0,0.1c0,0,0,0.1,0,0.1l0,0.1
                c0,0.1-0.1,0.1-0.1,0.2l-0.1,0l0,0c-0.1,0-0.1,0.1-0.2,0.1c0.1,0,0.2,0.1,0.3,0.2l0,0c0.1,0.1,0.2,0.1,0.2,0.2v0c0,0,0,0,0,0l0,0
                c0,0,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0.1,0,0.1l0,0.1c0,0-0.1,0.1-0.1,0.1l0,0c0,0-0.1,0.1-0.1,0.1l-0.1,0
                c0,0,0,0-0.1,0l0,0c0,0,0,0-0.1,0l-0.1,0c0,0-0.1,0-0.1,0h-0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0-0.3,0
                c-0.1,0-0.2,0-0.2,0h0l0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.1-0.1c0,0,0,0,0-0.1v-0.1c0-0.1,0-0.1,0-0.2v-0.1c0-0.1,0-0.1,0-0.2v0
                c0-0.1,0-0.1,0-0.2v-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.3c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1
                l0-0.1v0c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2C221.2,288.9,221.2,288.9,221.2,288.8C221.2,288.8,221.2,288.8,221.2,288.8
                L221.2,288.8z M255.4,288.7C255.4,288.7,255.4,288.7,255.4,288.7L255.4,288.7c0.2,0,0.2,0.1,0.3,0.2c0,0,0.1,0,0.1,0.1
                c0,0.1,0.2,0.2,0.2,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.2c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.2
                c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0.1,0.1,0.1,0.1l0-0.1c0,0,0,0,0,0c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1v-0.1c0-0.1,0-0.3,0-0.4
                c0-0.2,0-0.3,0-0.5c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0.1,0.2,0.1
                c0,0.1,0,0.1,0,0.1v0.1c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3
                c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.4c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1v0c0,0,0,0.1,0,0.1
                c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0.1-0.1,0.1-0.1,0.1c-0.1,0-0.2-0.1-0.3-0.2c0,0-0.1-0.1-0.1-0.1
                c0-0.1-0.1-0.1-0.1-0.1c-0.1-0.1-0.2,0-0.2-0.2c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.1-0.1-0.2-0.2
                c0-0.1-0.1-0.1-0.1-0.2c-0.1,0-0.1-0.1-0.1-0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.1c0,0.2,0,0.3,0,0.5c0,0.1,0,0.2,0,0.4
                c0,0.1,0,0.1,0,0.2v0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2-0.1,0.2c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.1-0.1
                c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.3v-0.1c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4c0-0.2,0-0.3,0-0.4
                c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.1C255.3,288.9,255.3,288.7,255.4,288.7z M229,288.7c0.1,0,0.2,0,0.3,0.1c0.1,0,0.1,0,0.2,0.1
                c0.1,0,0.3,0.1,0.3,0.1c0.1,0.1,0.1,0.1,0.2,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2
                c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.3-0.3,0.3c0,0-0.1,0-0.1,0c0,0,0,0.1,0.1,0.1h0c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.2,0.2
                c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0.1-0.1,0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0
                c0,0,0,0-0.1,0c-0.2,0-0.3-0.3-0.3-0.3c-0.1-0.1-0.1-0.1-0.1-0.2c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0
                c0,0.1,0,0.2,0,0.3c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1-0.1,0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0
                c0,0-0.1,0-0.1,0c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.3,0-0.5,0-0.7v0c0-0.1,0-0.1,0-0.2c0-0.2,0.1-0.3,0-0.5c0-0.1,0-0.1,0-0.2
                c0-0.1,0-0.3,0-0.4c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0.1-0.2c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0
                C228.9,288.8,228.9,288.7,229,288.7z M264,288.7c0,0,0.1,0,0.1,0c0.1,0,0.3,0,0.4,0c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.3,0,0.3,0.1
                c0,0-0.1,0.1-0.1,0.2c0,0-0.1,0.2-0.1,0.2c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.3-0.1-0.5-0.1c-0.1,0-0.2,0-0.3,0.1c0,0-0.1,0-0.1,0
                c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0,0,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.1,0,0.2
                c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.2c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1
                c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.3-0.1,0.4-0.1c0,0,0,0,0-0.1h0c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1
                c-0.1,0-0.2,0-0.3,0c-0.1,0-0.5,0-0.5-0.1v-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0.1-0.1c0.1,0,0.2,0,0.4,0
                c0.1,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0c0,0,0.3,0,0.3,0.1c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3
                c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.2c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0-0.2,0.1c-0.1,0.1-0.3,0.1-0.4,0.1c0,0,0,0-0.3,0
                c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.1-0.1-0.2-0.1c0,0-0.1,0-0.3-0.4c-0.1-0.1-0.1-0.2-0.1-0.3
                c0-0.1-0.1-0.2-0.1-0.2l0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3
                c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.2C263.6,288.7,263.8,288.7,264,288.7z M243.4,288.7c0.1,0,0.2,0.2,0.2,0.3
                c0,0.1,0.1,0.2,0.1,0.3c0.1,0.2,0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3
                c0-0.1,0.1-0.2,0.1-0.3l0,0c0-0.2,0.1-0.3,0.2-0.5c0.1-0.2,0.1-0.5,0.2-0.6c0-0.1,0-0.1,0.1-0.2c0,0,0,0,0,0c0-0.1,0.1-0.1,0.1-0.1
                c0,0,0,0,0.1,0c0,0,0,0,0.1,0h0.1c0,0,0,0,0.1,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0
                c-0.1,0.1-0.1,0.2-0.1,0.4c-0.1,0.1-0.1,0.3-0.1,0.4c-0.1,0.3-0.2,0.5-0.3,0.8c-0.1,0.2-0.2,0.5-0.2,0.7c0,0.2-0.1,0.4-0.2,0.4
                c-0.2,0-0.3-0.4-0.3-0.4c-0.2-0.5-0.1-0.4-0.2-0.6c-0.1-0.1-0.2-0.3-0.2-0.4c-0.1-0.1-0.1-0.3-0.2-0.4c-0.2,0.2-0.2,0.3-0.2,0.5
                c-0.5,0.9-0.3,0.7-0.4,0.9v0c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.1c-0.1,0-0.2-0.3-0.2-0.3
                c0,0,0-0.1,0-0.2c-0.1-0.2-0.2-0.4-0.2-0.7c0-0.2-0.1-0.4-0.2-0.5c0-0.1,0-0.3-0.1-0.4c0-0.1-0.1-0.1-0.1-0.2c0-0.2-0.1-0.4-0.1-0.5
                c0,0,0,0,0-0.1c0,0,0-0.1,0.1-0.1c0.1,0,0.2,0,0.3,0h0c0,0,0.1,0,0.1,0.1v0c0,0.1,0,0.2,0,0.2c0,0.1,0,0.2,0.1,0.3
                c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0.1,0.2c0,0.1,0,0.1,0.1,0.3c0,0.1,0.1,0.1,0.1,0.2c0-0.1,0.1-0.2,0.2-0.4
                c0.1-0.2,0.1-0.3,0.2-0.5c0.1-0.2,0.2-0.3,0.2-0.5C243.2,288.9,243.3,288.8,243.4,288.7C243.3,288.7,243.3,288.7,243.4,288.7z
                M286.7,291C286.8,291,286.8,291,286.7,291c0.1,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0.1v0
                c0,0.1-0.1,0.2-0.1,0.2c-0.1,0,0,0.1-0.1,0.1c-0.1,0-0.2,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2c0,0,0,0,0-0.1c0,0,0,0,0-0.1
                c0,0,0-0.1,0-0.1c0,0,0-0.1,0.1-0.1l0,0C286.7,291,286.7,291,286.7,291z M284.1,288.7c0,0,0.1,0,0.1,0c0,0,0.2,0.1,0.4,0.1
                c0.2,0,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.1,0.2,0.2c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.3
                c0,0.1,0,0.2,0,0.2c0,0.1-0.1,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.3-0.4,0.4c-0.3,0.2-0.6,0.3-0.9,0.3
                c-0.1,0-0.2,0-0.3-0.1c-0.2,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.3-0.4c0,0,0-0.1,0-0.1
                c-0.1-0.1-0.1-0.2-0.1-0.4c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.4,0.1-0.5,0.2-0.7c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.1
                c0,0,0.1,0,0.1,0v0c0,0,0.1,0,0.1-0.1c0.1-0.1,0.3-0.1,0.4-0.1c0,0,0,0,0.1,0C283.9,288.8,284,288.7,284.1,288.7z M277.2,288.7
                c0.1,0,0.3,0,0.4,0.1c0,0,0.1,0,0.1,0.1c0.1,0,0.3,0.1,0.3,0.2v0c0,0-0.1,0.2-0.1,0.2c0,0,0,0,0,0l0,0c0,0,0,0-0.1,0
                c0,0-0.1,0-0.1,0c-0.2-0.1-0.4-0.1-0.6-0.2c-0.1,0-0.1,0-0.2,0c-0.2,0-0.4,0.1-0.5,0.2c0,0,0,0-0.1,0.1c-0.1,0.1-0.2,0.2-0.2,0.3
                c0,0.1-0.1,0.2-0.1,0.4c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.2c0,0.1,0.2,0.1,0.2,0.3c0.1,0,0.1,0,0.1,0.1c0.1,0,0.2,0,0.2,0.1
                c0.2,0,0.4,0.1,0.5,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2-0.1,0.2-0.1h0c0,0,0,0,0,0c0.1,0,0.1,0,0.1,0.1c0,0,0,0,0,0
                c0,0.1,0.1,0.1,0.1,0.2c0,0.1-0.2,0.1-0.4,0.2c-0.1,0-0.2,0.1-0.4,0.1c-0.2,0-0.4,0-0.5-0.1c-0.1,0-0.2-0.1-0.2-0.1
                c-0.2,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.1-0.2-0.2c-0.1-0.1-0.2-0.2-0.2-0.4c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.2,0-0.4,0.1-0.6
                c0,0,0,0,0,0c0-0.1,0.1-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.1,0.2-0.2,0.3-0.2c0.3-0.1,0.4-0.2,0.5-0.2c0.1,0,0.2,0,0.3,0
                H277.2z"/>
        </Svg>
  );
}


export { Taster };