import React, { Component } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Item, Label, Input, Button } from 'native-base';


export default class Login extends Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'mega-font': require('../assets/fonts/FjallaOne-Regular.ttf'),
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return (

            <Container>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                <Text style={styles.bingo}>
                        Bingo
                         </Text>
                   
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
        flexDirection: 'column',
        width: '100%'
        
    },
    bingo: {
        flex: 1,
        width: '100%',
        marginTop: '5%',
        fontFamily: 'mega-font',
        fontSize: 60,
        marginLeft: '32%',
        marginTop: '20%'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: '75%',
        height: '100%',
        marginLeft: '13%',
        paddingBottom: '75%',
          
    },
    card: {
        backgroundColor: '#013440',
        paddingBottom: '65%',
        marginTop: '30%',
      
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
    txt: {
        color: 'black',
    }

});
