/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='home'
        component={FirstPage}
        options={{ title: 'Welcome' }}/>
        <Stack.Screen 
        name='second'
        component={SecondPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;