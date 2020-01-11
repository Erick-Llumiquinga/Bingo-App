import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={{ width: '100%', height: '100%' }}>
                <View style={StyleSheet.header}>

                </View>
                <View style={StyleSheet.body}>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </ImageBackground>


        );
    }
}

const styles = StyleSheet.create({
    

});
