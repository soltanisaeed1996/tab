import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const SecondPage = ({ navigation }) => {
    return (
        <View>
            <Text>second Page</Text>
            <Button onPress={() =>
                navigation.goBack()}
                title='back'></Button>
        </View>
    )
}

export default SecondPage;