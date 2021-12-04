import * as React from 'react';
import {useState} from 'react';
//import Svg from 'expo';
import Svg, {Circle, Rect, Path} from 'react-native-svg';
import {View, Animated, Dimensions, useColorScheme} from 'react-native';
import {COLORS} from './Colors.js';

const {width, height} = Dimensions.get('screen');

{/* <Svg height="100" width="100">
  <Rect x="0" y="0" width="100" height="100" fill="black" />
  <Circle cx="50" cy="50" r="30" fill="yellow" />
  <Circle cx="40" cy="40" r="4" fill="black" />
  <Circle cx="60" cy="40" r="4" fill="black" />
  <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
</Svg> */}


export const Square1 = () => {
    return (
      <View
        style = {{
          width: height,
          height: height,
          backgroundColor: COLORS.color4,
          borderRadius: 86,
          position: 'absolute',
          top: -height * .8,
          left: -height *  .3,
          transform: [
            {
                rotate: '15deg',
            }
          ]
        }}
      />  
    )
}

export const Square2 = () => {
    return (
        <View
            style = {{
                position: 'absolute',
                bottom: 0,
                left: 0,
            }}>
            <Svg height={350} width={width}>
                <Path
                    d="M-20 378.5C31.5 32.5 302.5 463 410 0C447.5 -285 375 644 500 644H0C0 644 -66.5 724.5 -17.5 378.5Z"
                    fill = {COLORS.color4}
                    stroke = {COLORS.color4}
                />  
            </Svg>
        </View>
    )
}

export const Square3 = () => {
    return (
      <View
        style = {{
            width: height,
            height: height,
            backgroundColor: COLORS.color4,
            borderRadius: 86,
            position: 'absolute',
            bottom: -height * .1,
            left: -height * 1.1,
            transform: [
                {
                    rotate: '40deg',
                }
            ]
        }}
      />  
    )
}