import React from 'react';
import {Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>My name is Jack</Text>;
    
    return <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        {greeting}
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;