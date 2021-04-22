import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { EnvironmentButton } from '~/components/Environment';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Header } from '../components/Header';

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>
      <EnvironmentButton title="Cozinha" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 27,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 27,
    color: colors.heading,
  },
});
