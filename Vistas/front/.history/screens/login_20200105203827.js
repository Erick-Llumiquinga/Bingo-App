import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');


export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                <View style={styles.header}>
                <Text>Bingo</Text>
                </View>

                <View style={StyleSheet.body}>
                    
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: 1
        
    },
    headerleft: {
        flex: 1,
       
    },
    headerRight: {
        flex: 1,
      
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }

});
