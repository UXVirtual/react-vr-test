import React from 'react';
import {
    AppRegistry,
    asset,
    StyleSheet,
    Mesh,
    VRAnimated,
    View,
} from 'react-vr';
class BouncyCube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new VRAnimated.Value(0)
        };
    }

    render() {
        return (
            <VRAnimated.View                         // Base: Image, Text, View
                style={{
                    flex: 1,
                    transform: [                        // `transform` is an ordered array
                        {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                    ]
                }}
            >
                <Mesh
                source={{
                    mesh:'assets/obj/primitives/cube/cube.obj',
                    texture:'assets/obj/primitives/cube/cube.jpg'
                }}/>
            </VRAnimated.View>
        );
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        VRAnimated.spring(                          // Base: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.8,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // Start the animation
    }
}

AppRegistry.registerComponent('BouncyCube', () => BouncyCube); //you must register the component to the AppRegistry for it to be available in JSX markup