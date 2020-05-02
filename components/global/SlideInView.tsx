import React, { useState, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

class SlideInView extends React.Component{

    constructor(props){
        super(props);
        this.state = {fadeAnim: new Animated.Value(0), slideAnim: new Animated.Value(10000)};
    }

    componentWillUnmount() { 
        let {fadeAnim, slideAnim} = this.state;
        console.log("slideAnim", slideAnim);
        fadeAnim.setValue(0);
        Animated.timing(slideAnim,{toValue: 10000, duration: 1000,}).start();
     }

    componentDidMount(){
        let {fadeAnim, slideAnim} = this.state;
        Animated.timing(
              fadeAnim,
              {
                toValue: 1,
                duration: 200,
              },      
        ).start();
        Animated.timing(
                slideAnim,
                {
                  toValue: 0,
                  duration: 500,
                },      
        ).start();        
    }


    render() {
        let {fadeAnim, slideAnim} = this.state;
        return (
            <Animated.View                 // Special animatable View
              style={{
                ...this.props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
                top: slideAnim,         // Bind opacity to animated value
                position: 'absolute'
              }}
            >
              {this.props.children}
            </Animated.View>
          );
    };
}

export default SlideInView;