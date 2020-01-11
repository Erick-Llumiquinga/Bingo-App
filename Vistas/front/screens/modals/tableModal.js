import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

class ModalView extends Component{
    state = {
        modalVisible: false,
    }

    setModalVisible(visible){
        this.setState({modalVisible: visible})
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal animationType="slide" 
                       transparent={false} 
                       visible={this.state.modalVisible} 
                       onRequestClose={() => {
                           Alert.alert('Modal has been closed.')
                       }}>
                    <View style={{marginTop: 22}}>
                        <View>
                        <ImageBackground source={require('../assets/picks/bingo.png')} style={styles.imagen}>
                            <Text>Hello World!</Text>
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

                <TouchableHighlight 
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>                   
            </View>
        )
    }
}