import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Container, Content, Form, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');


export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                <Container>
                    <Content contentContainerStyle={styles.content}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item inlineLabel>
                                        <Label>Username</Label>
                                        <Input />
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label>Password</Label>
                                        <Input />
                                    </Item>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
   content 

});
