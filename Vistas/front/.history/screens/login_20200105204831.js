import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');


export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                <Container>
                    <Content>
                        <Form>
                            <Item>
                                <Input placeholder="Username" />
                            </Item>
                            <Item last>
                                <Input placeholder="Password" />
                            </Item>
                        </Form>
                    </Content>
                </Container>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flex: 0.2

    },
    footer: {
        flex: 1

    },
    body: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
