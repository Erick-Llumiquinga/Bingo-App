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
        backgroundColor: '/* Color Theme Swatches in Hex */
        .The-game-of-bingo-on-a-green-background-with-copy-space-1-hex { color: #013440; }
        .The-game-of-bingo-on-a-green-background-with-copy-space-2-hex { color: #185359; }
        .The-game-of-bingo-on-a-green-background-with-copy-space-3-hex { color: #327373; }
        .The-game-of-bingo-on-a-green-background-with-copy-space-4-hex { color: #F2D0A7; }
        .The-game-of-bingo-on-a-green-background-with-copy-space-5-hex { color: #BF9D7E; }
        
        /* Color Theme Swatches in RGBA */
        .The-game-of-bingo-on-a-green-background-with-copy-space-1-rgba { color: rgba(1, 52, 63, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-2-rgba { color: rgba(24, 82, 89, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-3-rgba { color: rgba(50, 114, 114, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-4-rgba { color: rgba(242, 208, 167, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-5-rgba { color: rgba(191, 156, 126, 1); }
        
        /* Color Theme Swatches in HSLA */
        .The-game-of-bingo-on-a-green-background-with-copy-space-1-hsla { color: hsla(191, 96, 12, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-2-hsla { color: hsla(185, 57, 22, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-3-hsla { color: hsla(180, 38, 32, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-4-hsla { color: hsla(33, 74, 80, 1); }
        .The-game-of-bingo-on-a-green-background-with-copy-space-5-hsla { color: hsla(28, 33, 62, 1); }'
    }

});
