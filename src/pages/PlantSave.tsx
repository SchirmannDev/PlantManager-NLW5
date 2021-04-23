import React from 'react';
import {
  Text,
  Alert,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { color } from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri="" height={150} width={150} />

        <Text style={styles.plantName}>Nome da Planta</Text>

        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Distinctio,
          maxime.
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />
          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </Text>
        </View>
        <Text style={styles.alertLabel}>
          Escolha o melhor horario para ser lembrado.
        </Text>

        <Button title="Cadastrar" onPress={() => { }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    color: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 25,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
    textAlign: 'justify',
  },

  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
});
