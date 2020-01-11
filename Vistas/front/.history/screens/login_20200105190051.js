import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Content, Card, CardItem, Body, Text, Item, Label, Input } from 'native-base';

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
                                    <FontAwesome name="user" size={20}></FontAwesome>
                                    <Input placeholder="Nombre de Usuario" />
                                </Item>
                                <Item inlineLabel last>
                                    <FontAwesome name="lock" size={20}></FontAwesome>
                                    <Input placeholder="Contraseña" />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button primary style={styles.boton} >
                                <Text style={styles.textCenter}>Ingresar</Text>
                            </Button>
                            <Button success style={styles.boton} onPress={() => this.props.navigation.push('Registro')}>
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
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40
    }, 
    header: {
        flex: 1,
        marginTop: 30

    }

});
