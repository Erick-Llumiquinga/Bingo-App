import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

var myBackground = require()

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS ==="android" ? 24 : 0
  },
});
