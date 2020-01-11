import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Item, Label, Input, H1 } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/picks/bingo.png')} style={{ width: '100%', height: '100%', flex: 1 }}>
                <Container>
                <Content padder contentContainerStyle={styles.content}>
                    <Card>
                        <CardItem header bordered>
                            <H1 style={styles.textCenter}>Inicio de Sesion</H1>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={styles.body}>
                                <Item inlineLabel>
                                    <Input placeholder="Nombre de Usuario" />
                                </Item>
                                <Item inlineLabel last>
                                
                                    <Input placeholder="Contraseña" />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button primary style={styles.boton} >
                                <Text style={styles.textCenter}>Ingresar</Text>
                            </Button>
                            <Button success style={styles.boton} >
                                <Text style={styles.textCenter}>Registrate</Text>
                            </Button>
                        </CardItem>

                    </Card>
                </Content>
            </Container>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    textCenter: {
        textAlign: 'center',
        width: '100%'
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    boton: {
        width: '40%',
        marginHorizontal: '5%',
    },

    body: {
        padding: 20,
    }
})
