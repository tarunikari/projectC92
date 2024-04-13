// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StaticScreen1 from './screens/Static1';
import StaticScreen2 from './screens/Static2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StaticScreen1" component={StaticScreen1} />
        <Stack.Screen name="StaticScreen2" component={StaticScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
