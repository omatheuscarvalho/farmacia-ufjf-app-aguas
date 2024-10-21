// Telainicial.js

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  Alert,
  ActionSheetIOS,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  requestCameraPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';

export default function Telainicial({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        // Solicita permissão para a câmera
        const { status: cameraStatus } = await requestCameraPermissionsAsync();
        // Solicita permissão para a galeria
        const { status: libraryStatus } = await requestMediaLibraryPermissionsAsync();

        if (cameraStatus !== 'granted' || libraryStatus !== 'granted') {
          Alert.alert(
            'Atenção',
            'Desculpe, precisamos das permissões de câmera e galeria para isso funcionar!'
          );
        }
      }
    })();
  }, []);

  const handleOptionSelect = (option) => {
    if (option === 'camera') {
      handleTirarFoto();
    } else if (option === 'gallery') {
      handleSelecionarFoto();
    }
    setModalVisible(false);
  };

  const handleOpenActionSheet = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancelar', 'Tirar Foto', 'Selecionar da Galeria'],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            handleTirarFoto();
          } else if (buttonIndex === 2) {
            handleSelecionarFoto();
          }
        }
      );
    } else {
      setModalVisible(true);
    }
  };

  const handleTirarFoto = async () => {
    let resultado = await launchCameraAsync({
      mediaTypes: 'Images',
      allowsEditing: false,
      quality: 1,
    });

    if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
      navigation.navigate('ImageCropperScreen', { imageUri: resultado.assets[0].uri });
    } else {
      console.log('Câmera cancelada');
    }
  };

  const handleSelecionarFoto = async () => {
    let resultado = await launchImageLibraryAsync({
      mediaTypes: 'Images',
      allowsEditing: false,
      quality: 1,
    });

    if (!resultado.canceled && resultado.assets && resultado.assets.length > 0) {
      navigation.navigate('ImageCropperScreen', { imageUri: resultado.assets[0].uri });
    } else {
      console.log('Seleção de imagem cancelada');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <Button title="Selecionar Imagem" onPress={handleOpenActionSheet} />

      {/* Modal para Android */}
      {Platform.OS === 'android' && (
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setModalVisible(false)}
            activeOpacity={1}
          >
            <View style={styles.modalContainer}>
              <Button title="Tirar Foto" onPress={() => handleOptionSelect('camera')} />
              <View style={{ height: 10 }} />
              <Button title="Selecionar da Galeria" onPress={() => handleOptionSelect('gallery')} />
              <View style={{ height: 10 }} />
              <Button title="Cancelar" color="red" onPress={() => setModalVisible(false)} />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Alinha verticalmente
    alignItems: 'center',     // Alinha horizontalmente
    backgroundColor: '#f5f5f5',
  },
  logo: {
    fontSize: 36,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
