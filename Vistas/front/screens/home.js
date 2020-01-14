import React, { Component } from 'react';
import { Image, Modal, Text, TouchableHighlight, View, Alert, TextInput, FlatList, StyleSheet, ImageBackground } from 'react-native';
import {  Container, Header, Title, Button, Left, Right, Body, Icon  } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['B','I','N','G','O'],
          tableData: [
            ['70', '62', '3', '12', '42'],
            ['91', '80', '18', '40', '38'],
            ['1', '2', '', '45', '29'],
            ['10', '50', '25', '86', '10'],
            ['15', '24', '28', '74', '1']
          ],
          modalVisible: false,
        }
    }

    status = false

    estadoFila1 = false;
    estadoFila2 = false;
    estadoFila3 = false;
    estadoFila4 = false;
    estadoFila5 = false;
    estadoFila6 = false;
    


    numerosC1 = [{key: 1},{key: 7},{key: 13},{ key: 19},{key: 25},{key: 31},{key: 37},{key: 43},{key: 49},{key: 55},{key: 61},{key: 67},{key: 73},{key: 79},{key: 85}]
    numerosC2 = [{key: 2},{key: 8},{key: 14},{key: 20},{key: 26},{key: 32},{key: 38},{key: 44},{key: 50},{key: 56},{key: 62},{key: 68},{key: 74},{key: 80},{key: 86}]
    numerosC3 = [{key: 3},{key: 9},{key: 15},{key: 21},{key: 27},{key: 33},{key: 39},{key: 45},{key: 51},{key: 57},{key: 63},{key: 69},{key: 75},{key: 81},{key: 87}]
    numerosC4 = [{key: 4},{key: 10},{key: 16},{key: 22},{key: 28},{key: 34},{key: 40},{key: 46},{key: 52},{key: 58},{key: 64},{key: 70},{key: 76},{key: 82},{key: 88}]
    numerosC5 = [{key: 5},{key: 11},{key: 17},{key: 23},{key: 29},{key: 35},{key: 41},{key: 47},{key: 53},{key: 59},{key: 65},{key: 71},{key: 77},{key: 83},{key: 89}]
    numerosC6 = [{key: 6},{key: 12},{key: 18},{key: 24},{key: 30},{key: 36},{key: 42},{key: 48},{key: 54},{key: 60},{key: 66},{key: 72},{key: 78},{key: 84},{key: 90}]

    numerosTemporales = [3,1,90,25];
    numeroBola = 0;

    setModalVisible(visible){
        this.setState({modalVisible: visible})
    }

    async componentDidMount() {
        await Font.loadAsync({
            'bin-font': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
        }).then(() => {
            this.setState({ fontLoaded: true })
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
        const numeroColumnas = []
      
        for(let i = 1; i <= 15; i++){
            numeroColumnas.push(i);
        }

        return (    
            <View style={{marginTop: 22}}>
                <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.imagen}>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Bingo</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </Right>
                    </Header>

                    <View>
                        <View style={styles.container_principal} onPress={ () => {this.status = true}}>
                            {
                                this.status == false ? 
                                (<TextInput
                                    style={styles.bola_principal_texto}
                                    value='Jugar'
                                    editable={false}
                                />)
                                :
                                (<TextInput
                                    style={styles.bola_principal}
                                    value={this.numeroBola.toString()}
                                    editable={false}
                                />)
                            }
                            
                        </View>

                        <View style={styles.container_secundarias}>
                            {
                                this.numerosTemporales.map(item => <TextInput
                                    style={styles.bola_secundaria}
                                    value={item.toString()}
                                    editable={false}
                                />)
                            }    
                        </View>

                        <View style={styles.cartilla}>
                            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{backgroundColor: '#537791', }}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
                                <Rows data={this.state.tableData} textStyle={styles.text} />
                            </Table>
                        </View>
                    </View>

                    <TouchableHighlight style={styles.modal_position} onPress={() => { this.setModalVisible(true) }}>
                        <Text>Mostrar modal</Text>
                        {/* <Image source = {require('../assets/modal.png')} /> */}
                    </TouchableHighlight>
                </ImageBackground>

                <Modal animationType="slide" 
                    transparent={false} 
                    visible={this.state.modalVisible} 
                    onRequestClose={() => { Alert.alert('Modal has been closed.') }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.imagen}>
                                <Header style={{backgroundColor: '#20575783'}}>
                                    <Left>
                                        <Button transparent onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                                            <Icon name='arrow-back' />
                                        </Button>
                                    </Left>
                                    <Body>
                            
                                    <Text style={styles.input1}>Números Jugados</Text>
                                     
                                    </Body>
                                </Header>

                                <View style={styles.containerTabla1}> 
                                    <FlatList data={this.numerosC1} renderItem={({item}) => <Text style={styles.bola_tabla}>{item.key}</Text>} editable={true}/>
                                </View>    
                                <View style={styles.containerTabla2}> 
                                    <FlatList data={this.numerosC2} renderItem={({item}) => <Text style={styles.bola_tabla}>{item.key}</Text>} />
                                </View> 
                                <View style={styles.containerTabla3}> 
                                    <FlatList data={this.numerosC3} renderItem={({item}) => <Text style={styles.bola_tabla}>{item.key}</Text>} />
                                </View> 
                                <View style={styles.containerTabla4}> 
                                    <FlatList data={this.numerosC4} renderItem={({item}) => <Text style={styles.bola_tabla}>{item.key}</Text>} />
                                </View> 
                                <View style={styles.containerTabla5}> 
                                    <FlatList data={this.numerosC5} renderItem={({item}) => <Text style={styles.bola_tabla}>{item.key}</Text>} />
                                </View> 
                                <View style={styles.containerTabla6}> 
                                    <FlatList data={this.numerosC6} renderItem={({item}) => <Text style={styles.bola_tabla}>{item.key}</Text>} />
                                </View> 
                            </ImageBackground>

                            <TouchableHighlight 
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
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
        width: 150,
        height: 150,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        color: "black",
        textAlign: "center",
        fontSize: 100
      },
      bola_principal_texto: {
        backgroundColor: "white",
        width: 150,
        height: 150,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        color: "black",
        textAlign: "center",
        fontSize: 50
      },
      container_secundarias: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 25,
      },
      bola_secundaria: {
          backgroundColor: "black",
          width: 100,
          height: 100,
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 100,
          marginBottom: 50,
          color: "white",
          textAlign: "center",
          fontSize: 50,
      },
      cartilla: {
        // left: 25,
      },
      head: { 
          height: 40, 
          backgroundColor: 'brown',
        },
      text: { 
          margin: 6 , 
          color: 'white',
          textAlign: "center",
        },  
    imagen:{
      width: '105%',
      height: '100%',
      position: 'relative',
      right: '4%',
      bottom: '5%'
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
        bottom: 0,
        left: 25,
    }
})