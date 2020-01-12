import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground, Text, RecyclerViewBackedScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Body, Item, Label, Input, Button } from 'native-base';

const http = new XMLHttpRequest();

const API_URL = "http://192.168.100.5:8001/server/login";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            fontLoaded: false,
            correo: '',
            clave: ''
        };
    }

    handleCorreo = text => {
        this.setState({ correo: text });
    };

    handleClave = text => {
        this.setState({ clave: text });
    };

    async componentDidMount() {
        await Font.loadAsync({
            'bin-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
        })
    }

    /*login = () => {

        let data = `{
            "usuario": "${this.state.correo}",
            "clave": "${this.state.clave}"
        }`;


        http.open("POST", API_URL, true);
        http.setRequestHeader("Content-Type", "application/json");
        http.send(data);


        let datos = http.response.mensaje;

        if(datos == 'inc'){
            alert("Datos incorrectos")
            this.props.navigation.push('Login');
        }
        else{
            this.props.navigation.push('Inicio');
        }
        
    }*/
    //Login con fetch
    login = () => {

        const header = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usuario: this.state.correo,
                clave: this.state.clave
            })
        }

       return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.mensaje != 'inc'){
                    return this.props.navigation.push('Inicio')
                }
                return alert('Datos Incorrectos')
            })
            .catch((error) => {
                console.error(error);
            })
    }


    render() {
        return (
            <Container>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                   
                    <Content contentContainerStyle={styles.content}>
                        {this.state.fontLoaded == true ? (
                            <Text style={styles.bingo1}>
                            BINGO
                             </Text>
                        ) : (<Text style={styles.bingo2}>Loading...</Text>)
                        }
            
                    <Card style={styles.cardMom}>
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.input1}>Correo:</Label>
                                        ) : (<Text style={styles.input2}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleCorreo}/>
                                    </Item>
                                    <Item inlineLabel last>
                                    {this.state.fontLoaded == true ? (
                                        <Label style={styles.input3}>Clave:</Label>
                                        ) : (<Text style={styles.input4}>Loading...</Text>)
                                    }
                                        <Input style={styles.textoBlanco} onChangeText={this.handleClave} secureTextEntry={true}/>
                                   
                                    </Item>
                                    
                                    <Button rounded style={styles.btn} onPress={this.login}>
                                        <Text style={styles.txt} >Ingresar</Text>
                                    </Button>
                                    <Button rounded style={styles.btn2} onPress={() => this.props.navigation.push('Registro')}>
                                        <Text style={styles.txt} >Registrarse</Text>
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
    cardMom: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 30
    },
    bingo1: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontFamily: 'bin-font',
        fontSize: 60,
        marginLeft: '24%',
        color: '#EFFBF8',
       
    },
    bingo2: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontSize: 60,
        marginLeft: '24%',
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
    card: {
        backgroundColor: '#01344085',
        paddingBottom: '10%',
        borderRadius: 30,
    },
    input1: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bin-font',

    },
    input2: {
        color: '#EFFBF8',
        fontSize: 25,
        
    },
    input3: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bin-font',

    },
    input4: {
        color: '#EFFBF8',
        fontSize: 25,
        paddingTop: '5%',
       

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
