import React, { Component } from 'react';
import 
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';


export default class Login extends Component {
    render() {
        return (
            
                <Container>
                     <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                    <Content contentContainerStyle={styles.content}>
                        <Card >
                            <CardItem style={styles.card}>
                                <Body style={styles.input}>
                                    <Item inlineLabel>
                                        <Label style={styles.input}>Usuario</Label>
                                        <Input />
                                    </Item>
                                    <Item inlineLabel last>
                                        <Label style={styles.input}>Clave</Label>
                                        <Input />
                                    </Item>
                                    <Button rounded style={styles.btn}>
                                        <Text style={styles.txt}>Ingresar</Text>
                                    </Button>
                                    <Button rounded style={styles.btn2}>
                                        <Text style={styles.txt}>Registrarse</Text>
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
        paddingTop: '55%',
    },
    card: {
        backgroundColor: '#013440',
        paddingBottom: '30%',
        paddingTop: '10%',
    },
    input: {
        color: '#EFFBF8',
        fontSize: 18,
        paddingTop: '5%',
        
    }, 
    btn: {
       marginTop: '15%',
       marginLeft: '28%',
       backgroundColor: '#F2D0A7'
       
    },
    btn2: {
        marginTop: '5%',
        marginLeft: '23%',
        backgroundColor: '#BF9D7E'
        
     },
     txt:{
        color: 'black',
     }

});
