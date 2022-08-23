import React from 'react';
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native';

import Lottie from 'lottie-react-native';

import astronaut from './astronaut.json';

export default function App() {
 return (
  <SafeAreaView style={styles.container}>

    <View style={styles.textContainer}>
      <Text style={styles.title}>Seja Bem-vindo(a)</Text>
    </View>

    <View style={styles.image}>
      <Lottie resizeMode="contain" source={astronaut} autoPlay loop/>
    </View>

    <View style={styles.buttonView}>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    marginHorizontal: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#0F2770',
  },
  image: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0F2770',
    borderRadius: 15,
    marginHorizontal: 25,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  }
})