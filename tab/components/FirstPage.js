import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const FirstPage = ({ navigation, route }) => {
    const [second, setSecond] = useState('');
    useEffect(() => {

        setSecond(route.params.second);


    });
    return (
        <View>
            <Text>First Page</Text>
            <Button onPress={() =>
                navigation.navigate('Second')}
                title='secondPage'>
            </Button>
            <Text style={{ backgroundColor: 'red' }}>{second}</Text>
            <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Open Modal"
            />
        </View>
    )
}
export default FirstPage;