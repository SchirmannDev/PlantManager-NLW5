import { StatusBar } from 'react-native';
import React from 'react';
import { Welcome } from './src/pages/Welcome';

export default function App() {

  return (
    <>
      <Welcome />
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
    </>
  );

}

