import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const FirstPage = ({ navigation }) => {
    return (
        <View>
            <Text>First Page</Text>
            <Button onPress={() =>
                navigation.navigate('second')}
                title='secondPage'>

            </Button>
        </View>
    )
}
export default FirstPage;