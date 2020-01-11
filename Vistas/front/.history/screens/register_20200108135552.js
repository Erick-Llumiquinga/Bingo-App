import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';


export default class Regisster extends Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'mega-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return (

            <Container>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>

                    <Content contentContainerStyle={styles.content}>
                        <Text style={styles.registrar}>
                            INGRESA TUS DATOS
                         </Text>
                        <Card >
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                        <Label style={styles.input}>Usuario:</Label>
                                        <Input />
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label style={styles.input}>Clave:</Label>
                                        <Input />
                                    </Item>
                                    <Button rounded style={styles.btn}>
                                        <Text style={styles.txt}>Enviar</Text>
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
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center'

    },
    registrar: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontFamily: 'mega-font',
        fontSize: 30,
        marginLeft: '5%',
        color: '#EFFBF8',

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '75%',
        height: '100%',
        marginLeft: '13%',
        paddingBottom: '3%',


    },
    card: {
        backgroundColor: '#013440',
        paddingBottom: '10%',


    },
    input: {
        color: '#EFFBF8',
        fontSize: 25,
        paddingTop: '5%',
        fontFamily: 'mega-font',

    },
    btn: {
        marginTop: '15%',
        marginLeft: '35%',
        backgroundColor: '#F2D0A7',
        fontFamily: 'mega-font',

    },
    txt: {
        color: 'black',
    }

});
