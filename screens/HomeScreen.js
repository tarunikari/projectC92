// screens/HomeScreen.js

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StaticScreen1')}>
          <Text style={styles.buttonText}>Go to Static Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StaticScreen2')}>
          <Text style={styles.buttonText}>Go to Static Screen 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default HomeScreen;
