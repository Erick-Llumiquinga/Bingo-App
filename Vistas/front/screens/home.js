import React, {Component} from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert, TextInput} from 'react-native';
import { Content } from 'native-base';

export default class Home extends Component{
    state = {
        modalVisible: false,
    }

    setModalVisible(visible){
        this.setState({modalVisible: visible})
    }

    render() {

        const numeroColumnas = []
        const numerosC1 = [1,7,13,19,25,31,37,43,49,55,61,67,73,79,85]
        const numerosC2 = [2,8,14,20,26,32,38,44,50,56,62,68,74,80,86]
        const numerosC3 = [3,9,15,21,27,33,39,45,51,57,63,69,75,81,87]
        const numerosC4 = [4,10,16,22,28,34,40,46,52,58,64,70,76,82,88]
        const numerosC5 = [5,11,17,23,29,35,41,47,53,59,65,71,77,83,89]
        const numerosC6 = [6,12,18,24,30,36,42,48,54,60,66,72,78,84,90]

        for(let i = 1; i <= 15; i++){
            numeroColumnas.push(i);
        }

        return (
            <View style={{marginTop: 22}}>
                <View style={styles.container}>
        <View style={styles.container_principal}>
          <TextInput
            style={styles.bola_principal}
            value="69"
            editable={false}
          />
        </View>
        <View style={styles.container_secundarias}>
          <TextInput
            style={styles.bola_secundaria}
            value="26"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="57"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="83"
            editable={false}
          />
          <TextInput
            style={styles.bola_secundaria}
            value="90"
            editable={false}
          />
        </View>
        <View style={styles.body}></View>
      </View>














                <TouchableHighlight 
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

                 <Modal animationType="slide" 
                       transparent={false} 
                       visible={this.state.modalVisible} 
                       onRequestClose={() => {
                           Alert.alert('Modal has been closed.')
                       }}>
                    <View style={{marginTop: 22}}>
                        <View>
                        <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.imagen}>
                            <View style={styles.containerTabla1}>
                            {
                                numeroColumnas.map(el => <TextInput style={styles.bola_tabla} value={el} key={el} editable={false} />)
                            }
                            </View>    
                            <View style={styles.containerTabla2}>
                            {
                                numeroColumnas.map(el => <TextInput style={styles.bola_tabla} value={el} key={el} editable={false} />)
                            }
                            </View>      
                            <View style={styles.containerTabla3}>
                            {
                                numeroColumnas.map(el => <TextInput style={styles.bola_tabla} value={el} key={el} editable={false} />)
                            }
                            </View>  
                            <View style={styles.containerTabla4}>
                            {
                                numeroColumnas.map(el => <TextInput style={styles.bola_tabla} value={el} key={el} editable={false} />)
                            }
                            </View> 
                            <View style={styles.containerTabla5}>
                            {
                                numeroColumnas.map(el => <TextInput style={styles.bola_tabla} value={el} key={el} editable={false} />)
                            }
                            </View>
                            <View style={styles.containerTabla6}>
                            {
                                numeroColumnas.map(el => <TextInput style={styles.bola_tabla} value={el} key={el} editable={false} />)
                            }
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
        height: '100%'

    },
    containerTabla2: {
        position: 'absolute',
        left: '21%',
        height: '100%'

    },
    containerTabla3: {
        position: 'absolute',
        left: '37%',
        height: '100%'

    },
    containerTabla4: {
        position: 'absolute',
        left: '53%',
        height: '100%'

    },
    containerTabla5: {
        position: 'absolute',
        left: '69%',
        height: '100%'

    },
    containerTabla6: {
        position: 'absolute',
        left: '85%',
        height: '100%'

    },
    container: {
        flex: 1,
        flexDirection: "column"
      },
      container_principal: {
        flex: 1,
        marginTop: 50,
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
        position: "absolute",
        top: 25,
        color: "black",
        textAlign: "center",
        fontSize: 100
      },
      container_secundarias: {
        flex: 0.3,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
      },
      body: {
        flex: 2.2,
        height: 100
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
    fontSize: 50
      },
})

