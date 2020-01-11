import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');


export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {StyleSheet.headerleft}>

                </View>
                <view style = {StyleSheet.headerRight}>

                </view>
                <View style= {StyleSheet.body}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  headerleft: {
      flex: 1,
  }

});
