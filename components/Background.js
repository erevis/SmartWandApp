import * as React from 'react';
import {useState} from 'react';
//import Svg from 'expo';
import Svg, {Circle, Rect, Path} from 'react-native-svg';
import {View, Animated, Dimensions, useColorScheme} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {COLORS} from './Colors.js';



export const Square1 = () => {
    const [animation] = useState(new Animated.Value(0));

    const startAnimation = () => {
        animation.setValue(0);
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(()=>{
            animation.setValue(0)
        });
    }

    return (
      <Animated.View
        style = {{
          width: height,
          height: height,
          backgroundColor: COLORS.color4,
          borderRadius: 86,
          position: 'absolute',
          top: -height * .75,
          left: -height *  .3,
          transform: [
            {
                rotate: '35deg',
            },
            {
                translateX: animation.interpolate({
                    inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                    outputRange: [0, 10, -10, 10, -10, 0, 0, 0, 0, 0, 0]
                })
            },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                    outputRange: [0, 0, 0, 0, 0, 0, 10, -10, 10, -10, 0]
                })
            }
          ]
        }}
      />  
    )
}

export const Square2 = () => {
    const [animation] = useState(new Animated.Value(0));

    const startAnimation = () => {
        animation.setValue(0);
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(()=>{
            animation.setValue(0)
        });
    }

    return (
        <Animated.View
            style = {{
                position: 'absolute',
                bottom: 0,
                left: 0,
                transform: [
                    {
                        translateX: animation.interpolate({
                            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                            outputRange: [0, 10, -10, 10, -10, 0, 0, 0, 0, 0, 0]
                        })
                    },
                    {
                        translateY: animation.interpolate({
                            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                            outputRange: [0, 0, 0, 0, 0, 0, 10, -10, 10, -10, 0]
                        })
                    }
                ]
            }}>
            <Svg height={350} width={width}>
                <Path
                    d="M-20 378.5C31.5 32.5 302.5 463 410 0C447.5 -285 375 644 500 644H0C0 644 -66.5 724.5 -17.5 378.5Z"
                    fill = {COLORS.color4}
                    stroke = {COLORS.color4}
                />  
            </Svg>
        </Animated.View>
    )
}

export const Square3 = () => {
    const [animation] = useState(new Animated.Value(0));

    const startAnimation = () => {
        animation.setValue(0);
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(()=>{
            animation.setValue(0)
        });
    }

    return (
      <Animated.View
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
                },
                {
                    translateX: animation.interpolate({
                        inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                        outputRange: [0, 10, -10, 10, -10, 0, 0, 0, 0, 0, 0]
                    })
                },
                {
                    translateY: animation.interpolate({
                        inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                        outputRange: [0, 0, 0, 0, 0, 0, 10, -10, 10, -10, 0]
                    })
                }
            ]
        }}
      />  
    )
}