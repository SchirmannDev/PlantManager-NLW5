import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {},
});
