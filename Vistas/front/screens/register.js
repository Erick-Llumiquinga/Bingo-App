import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button, AsyncStorage } from 'native-base';


const API_URL = "http://192.168.100.5:8001/server/bingo";

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            nombre: '',
            correo: '',
            clave: ''
        };
    }

    handleNombre = text => {
        this.setState({ nombre: text });
    };

    handleCorreo = text => {
        this.setState({ correo: text });
    };

    handleClave = text => {
        this.setState({ clave: text });
    };

    async componentDidMount() {
        await Font.loadAsync({
            'bign-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
        })
    }
    
    saveData = () => {
        let tabla = "persona";

        let data = {
            tabla: tabla, 
            datos:
              {
                tipo_persona_id: 2,
                persona_nombre:  this.state.nombre,
                persona_email:  this.state.correo,
                persona_clave: this.state.clave
              }
        };

        let header = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        if(this.state.nombre != "" && this.state.correo != "" && this.state.clave != ""){
            return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.ok != false){
                    alert('Registro Exitoso')
                    return this.props.navigation.push('Login')
                }
                return alert('Error de servidor')
            })
            .catch((error) => {
                console.error(error);
            })
        }
            return alert("Campos Vacios")
    }

    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>

                    <Content contentContainerStyle={styles.content}>
                    {this.state.fontLoaded == true ? (
                        <Text style={styles.registrar1}>
                            INGRESA TUS DATOS
                         </Text>
                         ) : (<Text style={styles.registrar2}>Loading...</Text>)
                        }
                        <Card style={styles.cardMom}>
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.user1}>Nombre:</Label>
                                        ) : (<Text style={styles.user2}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleNombre} />
                                    </Item>

                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.user1}>Correo:</Label>
                                        ) : (<Text style={styles.user2}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleCorreo}/>
                                    </Item>

                                    <Item inlineLabel last>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.clave1}>Clave:</Label>
                                        ) : (<Text style={styles.clave2}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleClave} secureTextEntry={true}/>
                                    </Item>
                                    <Button rounded style={styles.btn} onPress={this.saveData}>
                                        <Text style={styles.txt}>Registrar</Text>
                                    </Button>
                                    <Button style={styles.btn2} onPress={() => {this.props.navigation.push('Login')}}>
                                        <Text style={styles.txt}>Login</Text>
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
        width: '105%',
        height: '100%',
        position: 'relative',
        right: '4%',  
    },
    registrar1: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
        fontFamily: 'bign-font',
        fontSize: 30,
        marginLeft: '5%',
        color: '#EFFBF8',
    },
    registrar2: {
        flex: 1,
        width: '100%',
        marginTop: '45%',
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
        paddingBottom: '25%',
    },
    cardMom: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 30
    },
    card: {
        backgroundColor: '#01344085',
        paddingBottom: '10%',
        borderRadius: 30,
    },
    user1: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bign-font',
    },
    user2: {
        color: '#EFFBF8',
        fontSize: 25,
    },
    clave1: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bign-font',
    },
    clave2: {
        color: '#EFFBF8',
        fontSize: 25,
    },
    btn: {
        marginTop: '15%',
        marginLeft: '25%',
        backgroundColor: '#F2D0A7',
        width: '50%',
        justifyContent: 'center',
    },
    btn2: {
        marginTop: '5%',
        marginLeft: '25%',
        backgroundColor: '#BF9D7E',
        width: '50%',
        justifyContent: 'center',
    },
    txt: {
        color: 'black',
        fontSize: 15,
    },
    textoBlanco: {
        color: '#ffffff'
    }
});


