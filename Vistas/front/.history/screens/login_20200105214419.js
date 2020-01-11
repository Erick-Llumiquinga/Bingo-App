import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Container, Content, Form, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');


export default class Login extends Component {
    render() {
        return (
            
                <Container>
                     <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
                        <Card >
                            <CardItem style={styles.card}>
                                <Body >
                                    <Item inlineLabel>
                                        <Label>Username</Label>
                                        <Input />
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label>Password</Label>
                                        <Input />
                                    </Item>
                                    <Button rounded>
                                        <Text>Primary</Text>
                                    </Button>
                                    <Button rounded>
                                        <Text>Primary</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                        
                    </Content>
                    </ImageBackground>
                </Container>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        justifyContent: 'center', 
        width: '75%',
        marginLeft: '13%',
    },
    card: {
        backgroundColor: '#013440',
    }

});
