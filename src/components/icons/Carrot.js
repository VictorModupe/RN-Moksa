import React, { Component } from 'react';
import Svg from './Svg';
import { Circle, Ellipse, G, LinearGradient, RadialGradient, Line, Path, Polygon, Polyline, Rect, Symbol, Text, Use, Defs, Stop, Mask } from 'react-native-svg';

const Carrot = ({width, height, fill, stroke, viewbox, style, hasNew, direction}) => {

    let direcionAngle = ''
    switch(direction) {
        case 'right':
            direcionAngle = 'rotate(0.000000)'
            break
        case 'left':
            direcionAngle = 'rotate(180.000000)'
            break
        case 'down':
            direcionAngle = 'rotate(90.000000)'
            break
        case 'up':
            direcionAngle = 'rotate(-90.000000)'
            break
    }

    return (
            <Svg style={style} width={width} height={height} viewBox={`0 0 20 20`} version="1.1" xmlns="http//www.w3.org/2000/Svg" xmlnsxlink="http//www.w3.org/1999/xlink">
                <G id="Mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <G id="Update-Avatar" transform="translate(-232.000000, -243.500000)" fill="#FFFDFD" fill-rule="nonzero">
                        <G id="Group-2" transform={`translate(242.000000, 247.000000) ${direcionAngle} translate(-242.000000, -247.000000) translate(217.000000, 222.000000)`}>
                            <Path d="M30.1116482,24.112631 L30.624527,24.6240644 L21.9990172,33.2611934 L21,32.2621762 L28.6315795,24.6305967 L21,16.9990172 L21.9990172,16 L30.1116482,24.112631 Z" id="Rectangle-2"></Path>
                        </G>
                    </G>
                </G>
            </Svg>
    );
}


export { Carrot };
