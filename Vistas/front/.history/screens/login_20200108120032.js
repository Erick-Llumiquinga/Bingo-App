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
                    
                    <Content contentContainerStyle={styles.content}>
                    <Text style={styles.bingo}>
                        Bingo
                         </Text>
                        
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
        fontFamily: 'mega-font',
        fontSize: 20
    },
    bingo: {
        flex: 1,
        width: '25%',
        mar
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
    txt: {
        color: 'black',
    }

});
