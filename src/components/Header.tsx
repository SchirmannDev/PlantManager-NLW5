import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import userImg from '../assets/cintia.png';

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Cíntia</Text>
      </View>

      <View style={styles.containerImage}>
        <Image source={userImg} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    padding: 30,
  },
  greeting: {
    fontSize: 52,
    color: colors.pink,
    fontFamily: fonts.heading,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  containerImage: {
    borderWidth: 2,
    borderRadius: 50,
    borderStyle: 'solid',
    borderColor: '#fc27a7',
  },
  userName: {
    fontSize: 52,
    fontFamily: fonts.heading,
    color: colors.pink,
  },
});
