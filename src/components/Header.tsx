import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import userImg from '../assets/cintia.png';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStorageUserName(params: type) {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }
    loadStorageUserName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
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
    padding: 20,
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
