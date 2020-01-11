import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={StyleSheet.container}>
                <View style={StyleSheet.header}>
                <Card>
                        <CardItem>
                            <Body>
                                <Item fixedLabel>
                                    <Label>Username</Label>
                                    <Input />
                                </Item>
                                <Item fixedLabel last>
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
                <View style={StyleSheet.body}>
                    <Card>
                        <CardItem>
                            <Body>
                                <Item fixedLabel>
                                    <Label>Username</Label>
                                    <Input />
                                </Item>
                                <Item fixedLabel last>
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container{}
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '100%',
    }

});
