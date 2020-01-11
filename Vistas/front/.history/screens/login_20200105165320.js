import React, { Component } from 'react';
import { StyleSheet, View, Platform, Image } from 'react-native';
import {  Content, Card, CardItem, Body, Text } from 'native-base';

var myBackground = require('../assets/picks/bingo.png');

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image source={myBackground}/>
            <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   width: null,
   height: null,
   justifyContent: 'center',
   alignItems: 'center'
  },
});
