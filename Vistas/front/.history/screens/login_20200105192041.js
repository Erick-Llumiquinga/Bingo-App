import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

var myBackground = require('../assets/picks/bingo.png');
const {width: }

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={{ width: '100%', height: '100%', flex: 1 }}>
                <View >
                    <TextInput
                    style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    input:{

    }

});
