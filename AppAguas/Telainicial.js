// Telainicial.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { launchCameraAsync } from 'expo-image-picker';

export default function Telainicial() {
  const handleAbrirCamera = async () => {
    let resultado = await launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });
    // A foto é tirada e ele volta para tela inicial
    // Você pode manipular o resultado aqui, se necessário
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <Button title="Gerar Relatório" onPress={handleAbrirCamera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Alinha verticalmente
    alignItems: 'center',     // Alinha horizontalmente
  },
  logo: {
    fontSize: 36,
    marginBottom: 20,
  },
});
