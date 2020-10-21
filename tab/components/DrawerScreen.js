import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const DrawerScreen = ({ route, navigation }) => {

    return (
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
    )
}
const styles = StyleSheet.create({
    headerButton: {
        marginRight: 15,
        padding: 15,
        margin: 15,

    }
})

export default DrawerScreen;