// ImageCropperScreen.js

import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, View, StyleSheet } from 'react-native';
import { ImageEditor } from 'expo-image-editor';

export default function ImageCropperScreen({ route, navigation }) {
  const { imageUri } = route.params;
  const [isProcessing, setIsProcessing] = useState(false);
  const hasNavigatedRef = useRef(false); // Referência para evitar múltiplas navegações

  const handleSave = async (editedImage) => {
    if (hasNavigatedRef.current) return; // Evita navegação duplicada
    hasNavigatedRef.current = true;
    console.log('Imagem salva:', editedImage);
    console.log('Navegando');
    setIsProcessing(true);
    try {
      navigation.replace('ReportScreen', { photoUri: editedImage.uri });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível processar a imagem.');
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    if (hasNavigatedRef.current) return; // Evita navegação duplicada
    hasNavigatedRef.current = true;
    console.log('Edição cancelada');
    navigation.goBack();
  };

  if (isProcessing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageEditor
        imageUri={imageUri}
        fixedCropAspectRatio={16 / 9} // Ajuste a proporção conforme necessário
        lockAspectRatio={false} // Permite que o usuário ajuste a proporção
        minimumCropDimensions={{ width: 100, height: 100 }}
        onEditingComplete={handleSave}
        onCloseEditor={handleCancel}
        mode="crop-only" // Modo apenas de corte
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000', // Fundo preto para melhor visualização do editor
  },
  loadingContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Fundo preto durante o carregamento
  },
});
