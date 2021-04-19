import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma facil.
      </Text>
      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.{'\n'}
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>


    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 25,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    paddingHorizontal: 10,

  },
  image: {
    width: 492,
    height: 484
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
});