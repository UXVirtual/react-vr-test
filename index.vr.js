import React from 'react';
import {
  AppRegistry,
  asset,
  Mesh,
  View,
} from 'react-vr';
import {BouncyCube} from './src/components/BouncyCube';

class ReactVRTest extends React.Component {

  render() {
    return (
      <View
        style={{
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -3]},{ scale : 1 }]
      }}>
        <BouncyCube name="cube1"/>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactVRTest', () => ReactVRTest);
