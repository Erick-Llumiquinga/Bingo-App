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
            'bin-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return (

            <Container>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.container}>
                   
                    <Content contentContainerStyle={styles.content}>
                    <Text style={styles.bingo}>
                        BINGO
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
                                        <Text style={styles.txt}>Ingresar</Text>
                                    </Button>
                                    <Button rounded style={styles.btn2}>
                                        <Text style={styles.txt} onPress={() => this.props.navigation.push('Registro')}>Registrarse</Text>
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
        justifyContent: 'center',
        fontFamily: 'bin-font',
        
    },
    bingo: {
        flex: 1,
        width: '100%',
        marginTop: '21%',
        fontFamily: 'bin-font',
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
        backgroundColor: '#013440',
        paddingBottom: '10%',
                
      
    },
    input: {
        color: '#EFFBF8',
        fontSize: 25,
        paddingTop: '5%',
        fontFamily: 'bingo-font',

    },
    btn: {
        marginTop: '15%',
        marginLeft: '28%',
        backgroundColor: '#F2D0A7',
        fontFamily: 'bingo-font',

    },
    btn2: {
        marginTop: '5%',
        marginLeft: '23%',
        backgroundColor: '#BF9D7E',
        fontFamily: 'bingo-font',

    },
    txt: {
        color: 'black',
    }

});
