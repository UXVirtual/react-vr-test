import React from 'react';
import {
    AppRegistry,
    asset,
    Mesh,
    Animated,
    View,
} from 'react-vr';

//you must export the class in order for it to be available in the AppRegistry when an instance of the Class object is created
export class BouncyCube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0)
        };
        console.log('BouncyCube constructed');
    }

    render() {
        return (
            <Animated.View                         // Base: Image, Text, View
                style={{
                    flex: 1,
                    transform: [                        // `transform` is an ordered array
                        {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                    ]
                }}
            >
                <Mesh
                source={{
                    mesh:asset('obj/primitives/cube/cube.obj'),
                    texture:asset('obj/primitives/cube/cube.jpg')
                }}/>
            </Animated.View>
        );
    }

    componentDidMount() {

        console.log('BouncyCube mounted');

        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.8,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                              // Start the animation
    }
}

AppRegistry.registerComponent('BouncyCube', () => BouncyCube); //you must register the component to the AppRegistry for it to be available in JSX markup