// screens/StaticScreen1.js

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class StaticScreen1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is Static Screen 1</Text>
      </View>
    );
  }
}

export default StaticScreen1;
