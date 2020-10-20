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
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={
        {
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
      }>
        <Stack.Screen
          name='Home'
          component={FirstPage}
          initialParams={{ second: 'first value' }}
        />
        <Stack.Screen
          name='Second'
          component={SecondPage}
          initialParams={{ itemId: 420 }}
          options={({ route }) => ({
            title: route.params.name,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
                style={styles.headerButton}
              />
            )
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  headerButton:{
    marginRight:15,
    padding:15,
    margin:15,
    
  }
})
export default App;