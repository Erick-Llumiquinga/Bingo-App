import React, { Component } from 'react';
import { Image, Modal, Text, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground } from 'react-native';
import {  Container, Header, Title, Button, Left, Right, Body, Icon, Spinner, Fab, Form   } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCoffee } from '@fortawesome/free-solid-svg-icons';



const API_URL = "http://192.168.100.12:8001/server/bingo/cartillas";
const API_URL_Start = "http://192.168.100.12:8001/server/bingo/jugar";

export default class Home extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
          tableHead: ['B','I','N','G','O'],
          tableData: [],
          numerosTemporales: [],
          numerosJugados: [],
          modalVisible: false,
          status: false,
          numeroBola: 'Jugar',
        }
        this.cargarTabla();
    }

    estadoFila1 = false;
    estadoFila2 = false;
    estadoFila3 = false;
    estadoFila4 = false;
    estadoFila5 = false;
    estadoFila6 = false;

    numerosC1 = [{key: 1,state: false},{key: 7,state: false},{key: 13,state: false},{ key: 19,state: false},{key: 25,state: false},{key: 31,state: false},{key: 37,state: false},{key: 43,state: false},{key: 49,state: false},{key: 55,state: false},{key: 61,state: false},{key: 67,state: false},{key: 73,state: false},{key: 79,state: false},{key: 85,state: false}]
    numerosC2 = [{key: 2,state: false},{key: 8,state: false},{key: 14,state: false},{key: 20,state: false},{key: 26,state: false},{key: 32,state: false},{key: 38,state: false},{key: 44,state: false},{key: 50,state: false},{key: 56,state: false},{key: 62,state: false},{key: 68,state: false},{key: 74,state: false},{key: 80,state: false},{key: 86,state: false}]
    numerosC3 = [{key: 3,state: false},{key: 9,state: false},{key: 15,state: false},{key: 21,state: false},{key: 27,state: false},{key: 33,state: false},{key: 39,state: false},{key: 45,state: false},{key: 51,state: false},{key: 57,state: false},{key: 63,state: false},{key: 69,state: false},{key: 75,state: false},{key: 81,state: false},{key: 87,state: false}]
    numerosC4 = [{key: 4,state: false},{key: 10,state: false},{key: 16,state: false},{key: 22,state: false},{key: 28,state: false},{key: 34,state: false},{key: 40,state: false},{key: 46,state: false},{key: 52,state: false},{key: 58,state: false},{key: 64,state: false},{key: 70,state: false},{key: 76,state: false},{key: 82,state: false},{key: 88,state: false}]
    numerosC5 = [{key: 5,state: false},{key: 11,state: false},{key: 17,state: false},{key: 23,state: false},{key: 29,state: false},{key: 35,state: false},{key: 41,state: false},{key: 47,state: false},{key: 53,state: false},{key: 59,state: false},{key: 65,state: false},{key: 71,state: false},{key: 77,state: false},{key: 83,state: false},{key: 89,state: false}]
    numerosC6 = [{key: 6,state: false},{key: 12,state: false},{key: 18,state: false},{key: 24,state: false},{key: 30,state: false},{key: 36,state: false},{key: 42,state: false},{key: 48,state: false},{key: 54,state: false},{key: 60,state: false},{key: 66,state: false},{key: 72,state: false},{key: 78,state: false},{key: 84,state: false},{key: 90,state: false}]

   

    setModalVisible(visible){
        this.setState({modalVisible: visible})
    }

    async componentDidMount() {
        await Font.loadAsync({
            'bin-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
            'Roboto': require('../node_modules/native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
        });

    }

    jugar = () => {
            const header = {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }

            return fetch(API_URL_Start,header)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.state.numeroBola = responseJson;
                    this.cargarNumTemp(responseJson);
                })
                .catch((error) => {
                    console.error(error);   
                })
        
    }


    cargarTabla = ()=>{

        let culumna1 = [];
            let culumna2 = [];
            let culumna3 = [];
            let culumna4 = [];
            let culumna5 = [];

        const header = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }

        return fetch(API_URL,header)
            .then((response) => response.json())
            .then((responseJson) =>{
               let arrayCartilla = responseJson
               for(let i = 0; i <= arrayCartilla.length-1; i++){
                if(i < 5){
                    culumna1.push(arrayCartilla[i]);
                }
                else if(i < 10){
                    culumna2.push(arrayCartilla[i]);
                }
                else if(i < 15){
                    if(i < 12){
                        culumna3.unshift(arrayCartilla[i]);
                    }
                    else if(i == 12){
                        culumna3.push('Bingo');
                    }
                    else if(i < 15){
                        culumna3.push(arrayCartilla[i])
                    }
                }
                else if(i < 20){
                    culumna4.push(arrayCartilla[i]);
                }
                else if(i < 25){
                    culumna5.push(arrayCartilla[i]);
                }
            }

                this.state.tableData.push(culumna1);
                this.state.tableData.push(culumna2);
                this.state.tableData.push(culumna3);
                this.state.tableData.push(culumna4);
                this.state.tableData.push(culumna5);

            })
            .catch((error) => {
                alert(JSON.stringify(error))
            })
             
    }

    cargarNumTemp = (num) => {
        if(this.state.numerosTemporales.length === 4){
            this.state.numerosTemporales.shift();
            this.state.numerosTemporales.push(num);
            this.state.numerosJugados.push(num);
            this.pintarNumeros(this.state.numerosJugados);
        }
        else{
            this.state.numerosTemporales.push(num);
            this.state.numerosJugados.push(num);
            this.pintarNumeros(this.state.numerosJugados);
        }
    }

    pintarNumeros = (numArray) => {
        numArray.forEach(num => {
            this.numerosC1.forEach(element =>{
                if(parseInt(num) == element.key){
                    return element.state = true;
                }
            });
            this.numerosC2.forEach(element =>{
                if(parseInt(num) == element.key){
                    return element.state = true;
                }
            });
            this.numerosC3.forEach(element =>{
                if(parseInt(num) == element.key){
                    return element.state = true;
                }
            });
            this.numerosC4.forEach(element =>{
                if(parseInt(num) == element.key){
                    return element.state = true;
                }
            });
            this.numerosC5.forEach(element =>{
                if(parseInt(num) == element.key){
                    return element.state = true;
                }
            });
            this.numerosC6.forEach(element =>{
                if(parseInt(num) == element.key){
                    return element.state = true;
                }
            });
        })
    }

    tablaComprobacion = () =>{

        let numero = 8;

        this.numerosC1.forEach(element => {
            if(element.key === numero){
                this.estadoFila1 = true;
            }
        })
    }

    render() {
        return (    
            <View >
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.imagen}>
                    <Header style={{backgroundColor: '#20575783'}}>
                        <Left>
                            <Button transparent onPress={() => {this.props.navigation.push('Login') }}>
                                <Text>Regresar</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={styles.input1}>Bingo</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </Right>
                    </Header>

                    <View>
                        <View style={styles.container_principal}>
                            <Text style={styles.bola_principal_texto} onPress={this.jugar}>{this.state.numeroBola}</Text>
                        </View>

                        <View style={styles.container_secundarias}>
                            {
                                this.state.numerosTemporales.map(item => <TextInput
                                    style={styles.bola_secundaria}
                                    value={item.toString()}
                                    editable={false}
                                />)
                            }    
                        </View>

                        <View style={styles.cartilla}>
                            <Table borderStyle={{borderWidth: 1, borderColor: '#896A51'}} style={{backgroundColor: '#F2D0A7',}}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                                <Rows data={this.state.tableData} textStyle={styles.text} />
                            </Table>
                        </View>
                    </View>

                    
                    <Fab position="bottomLeft" style={{backgroundColor: 'white' }} onPress={() => { this.setModalVisible(!this.state.modalVisible)}}>
                        <Image source={require('../assets/icons8.png')} style={{height: '80%', width: '80%'}}/>
                     </Fab>
                    
                </ImageBackground>

                <Modal animationType="slide" 
                    transparent={false} 
                    visible={this.state.modalVisible}>
                    <View >
                        <View>
                            <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.imagen}>
                                <Header style={{backgroundColor: '#20575783'}}>
                                    <Left>
                                        <Button transparent onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                                            <Icon name='arrow-back' />
                                            <Text>Regresar</Text>
                                        </Button>
                                    </Left>
                                    <Body>
                            
                                    <Text style={styles.input1}>Números Jugados</Text>
                                     
                                    </Body>
                                </Header>

                                <View style={styles.containerTabla1}> 
                                    <FlatList data={this.numerosC1} renderItem={({item}) => item.state == true  ? (<Text style={styles.bola_tabla_W}>{item.key}</Text> ):(<Text style={styles.bola_tabla}>{item.key}</Text>)} />
                                </View>    
                                <View style={styles.containerTabla2}> 
                                    <FlatList data={this.numerosC2} renderItem={({item}) => item.state == true  ? (<Text style={styles.bola_tabla_W}>{item.key}</Text> ):(<Text style={styles.bola_tabla}>{item.key}</Text>)} />
                                </View> 
                                <View style={styles.containerTabla3}> 
                                    <FlatList data={this.numerosC3} renderItem={({item}) => item.state == true  ? (<Text style={styles.bola_tabla_W}>{item.key}</Text> ):(<Text style={styles.bola_tabla}>{item.key}</Text>)} />
                                </View> 
                                <View style={styles.containerTabla4}>
                                    <FlatList data={this.numerosC4} renderItem={({item}) => item.state == true  ? (<Text style={styles.bola_tabla_W}>{item.key}</Text> ):(<Text style={styles.bola_tabla}>{item.key}</Text>)} />
                                </View> 
                                <View style={styles.containerTabla5}> 
                                    <FlatList data={this.numerosC5} renderItem={({item}) => item.state == true  ? (<Text style={styles.bola_tabla_W}>{item.key}</Text> ):(<Text style={styles.bola_tabla}>{item.key}</Text>)} />
                                </View> 
                                <View style={styles.containerTabla6}> 
                                    <FlatList data={this.numerosC6} renderItem={({item}) => item.state == true  ? (<Text style={styles.bola_tabla_W}>{item.key}</Text> ):(<Text style={styles.bola_tabla}>{item.key}</Text>)} />
                                </View> 
                            </ImageBackground>
                        </View>
                    </View>       
                </Modal>               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerTabla1: {
        position: 'absolute',
        left: '5%',
        top: '10%', 
        height: '100%',    
        width: '20%'
    },
    containerTabla2: {
        position: 'absolute',
        left: '21%',
        top: '10%', 
        height: '100%',
        width: '20%'
    },
    containerTabla3: {
        position: 'absolute',
        left: '37%',
        top: '10%', 
        height: '100%',
        width: '20%'
    },
    containerTabla4: {
        position: 'absolute',
        left: '53%',
        top: '10%', 
        height: '100%',
        width: '20%'
    },
    containerTabla5: {
        position: 'absolute',
        left: '69%',
        top: '10%', 
        height: '100%',
        width: '20%'
    },
    containerTabla6: {
        position: 'absolute',
        left: '85%',
        top: '10%', 
        height: '100%',
        width: '20%'
    },
      container_principal: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
      },
      bola_principal: {
        backgroundColor: "white",
        width: 120,
        height: 120,

        borderRadius: 100,
        color: "black",
        textAlign: "center",
        fontSize: 80
      },
      bola_principal_texto: {
        backgroundColor: "white",
        width: 120,
        height: 120,
        borderRadius: 100,
        color: "black",
        textAlign: "center",
        fontSize: 35,
        paddingTop: 35
      },
      container_secundarias: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 25,
      },
      bola_secundaria: {
          backgroundColor: "#013440",
          width: 70,
          height: 70,
          borderRadius: 100,
          marginBottom: 20,
          marginLeft: 5,
          color: "white",
          textAlign: "center",
          fontSize: 35,
      },
      cartilla: {
        left: '7%',
        width: '90%',
        borderRadius: 10
      },
      head: { 
          height: 40, 
          backgroundColor: '#BF9D7E',
        },
      text: { 
          margin: 6 , 
          color: 'white',
          textAlign: "center",
        },  
    imagen:{
      width: '104%',
      height: '100%',
      position: 'relative',
      right: '4%',
    },
    header:{
      backgroundColor: '#327373',
    },
    bola_tabla:{
        position: 'relative',
        top: '10%',
        left: '20%',
        backgroundColor: "black",
        width: 30,
        height: 30,
        borderWidth: 2,
        borderRadius: 100,
        marginBottom: 3,
        color: "white",
        textAlign: "center",
        fontSize: 17
    },
    bola_tabla_W:{
        position: 'relative',
        top: '10%',
        left: '20%',
        backgroundColor: "white",
        width: 30,
        height: 30,
        borderRadius: 100,
        marginBottom: 3,
        color: "black",
        textAlign: "center",
        fontSize: 17
    },
      textoBlanco: {
        color: '#ffffff'
    },
    input1: {
        color: '#EFFBF8',
        fontSize: 25,
        fontFamily: 'bin-font',
    },
    modal_position: {
        position: 'absolute',
        bottom: 15,
        left: 25,
    }
})