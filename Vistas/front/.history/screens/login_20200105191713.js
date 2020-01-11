import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={{ width: '100%', height: '100%', flex: 1 }}>
                <View >
                    <TextInput
                        placeholder={'Username'}
                        placeholderTextColor={}

                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        marginTop: 30
    }

});
