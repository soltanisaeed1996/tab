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
  StyleSheet, Button,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from './components/DrawerScreen';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode='modal' initialRouteName = 'main'>
        <Stack.Screen name='main' component={DrawerScreen}
          >
        </Stack.Screen>
        <Stack.Screen name='MyModal' component={ModalScreen} >



        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;