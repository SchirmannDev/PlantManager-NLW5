import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

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

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <EnvironmentButton title="Cozinha" active />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
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
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
