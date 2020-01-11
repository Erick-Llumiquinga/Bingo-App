import React, { Component } from 'react';
import { StyleSheet, View, Platform, ImageB } from 'react-native';
import {ImageBackground} from 'react-native-web';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={myBackground}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
});
