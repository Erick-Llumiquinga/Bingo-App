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
                <View style= {StyleSheet.body}>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  

});
