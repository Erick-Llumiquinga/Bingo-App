import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';
var myBackground = require('../assets/picks/bingo.png');
ç

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={{ width: '100%', height: '100%', flex: 1 }}>
                <View style = {StyleSheet.headerleft}>

                </View>
                <view style = {StyleSheet.headerRight}>

                </view>
                <View style= {sty}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: '25',
    }

});
