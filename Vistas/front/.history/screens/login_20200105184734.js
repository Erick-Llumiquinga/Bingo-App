import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={{ width: '100%', height: '100%', flex: 1 }}>
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
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ''
    }

});
