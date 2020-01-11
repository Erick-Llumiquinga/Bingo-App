import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

var myBackground = require('./assets/bingo.png');

export default function Login() {
  return (
    <View style={styles.container}>
      <
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS ==="android" ? 24 : 0
  },
});
