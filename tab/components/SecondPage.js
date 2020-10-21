import React, { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const SecondPage = ({ route, navigation }) => {
    const { title, itemId, } = route.params;
    const [count, setCount] = useState(0);

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    //         ),
    //     });
    // }, [navigation]);
    return (

        <Tab.Navigator >
            <Tab.Screen name='first' component={third}></Tab.Screen>
            <Tab.Screen name='second' component={fourth}></Tab.Screen>
        </Tab.Navigator>


    )
}
const fourth = () => {
    return (
        <View>
            <Text>fourth</Text>
        </View>
    )
}
const third = () => {
    return (
        <View>
            <Text>third</Text>
            {/* <Text>{count}</Text>
            <Text>{JSON.stringify(title)}</Text>
            <Text>{JSON.stringify(itemId)}</Text>
            <Button onPress={() =>
                navigation.goBack()}
                title='back'></Button>
            <Button onPress={() =>
                navigation.push('Second', { title: 'sick', itemId: 12 })
            }
                title='go to second page again'></Button>
            <Button onPress={() =>
                navigation.popToTop()}
                title='go to home'>
            </Button>
            <Button onPress={() => {
                navigation.navigate('Home', { second: 'hi hooker' })
            }}
                title='go to home with effect'></Button>
            <Button
                title="Update the title"
                onPress={() => navigation.setOptions({ title: 'Updated!' })}
            />
            <Button
                title="Reset the title"
                onPress={() => navigation.setOptions({ title: JSON.stringify(route.params.name) })}
            /> */}
        </View>
    )
}
export default SecondPage;