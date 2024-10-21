// Telainicial.js

import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import { launchCameraAsync, requestCameraPermissionsAsync } from 'expo-image-picker';

export default function Telainicial({ navigation }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Atenção', 'Desculpe, precisamos da permissão da câmera para isso funcionar!');
        }
      }
    })();
  }, []);

  const handleAbrirCamera = async () => {
    let resultado = await launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: false,
      quality: 1,
    });

    if (!resultado.cancelled) {
      // Navega para a tela de relatório passando o URI da foto
      navigation.navigate('ReportScreen', { photoUri: resultado.assets[0].uri });
    } else {
      // Caso o usuário cancele a câmera
      console.log('Câmera cancelada');
    }
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
