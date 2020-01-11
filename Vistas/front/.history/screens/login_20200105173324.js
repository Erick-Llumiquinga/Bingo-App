import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
                <ImageBackground source={myBackground} style={styles.container}>

                <ImageBackground/>
               
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
