// SelectionScreen.js

import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Appbar } from "react-native-paper";
import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";

export default function SelectionScreen({ navigation }) {
  const handleTirarFoto = async () => {
    let resultado = await launchCameraAsync({
      mediaTypes: "Images",
      allowsEditing: false,
      quality: 1,
    });

    if (
      !resultado.canceled &&
      resultado.assets &&
      resultado.assets.length > 0
    ) {
      navigation.navigate("ImageCropperScreen", {
        imageUri: resultado.assets[0].uri,
      });
    } else {
      console.log("Câmera cancelada");
    }
  };

  const handleSelecionarFoto = async () => {
    let resultado = await launchImageLibraryAsync({
      mediaTypes: "Images",
      allowsEditing: false,
      quality: 1,
    });

    if (
      !resultado.canceled &&
      resultado.assets &&
      resultado.assets.length > 0
    ) {
      navigation.navigate("ImageCropperScreen", {
        imageUri: resultado.assets[0].uri,
      });
    } else {
      console.log("Seleção de imagem cancelada");
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Selecionar Imagem" />
      </Appbar.Header>
      <View style={styles.content}>
        <Text style={styles.instructions}>Escolha uma opção:</Text>
        <Button
          mode="contained"
          icon="camera"
          onPress={handleTirarFoto}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Tirar Foto
        </Button>
        <Button
          mode="contained"
          icon="image"
          onPress={handleSelecionarFoto}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Selecionar da Galeria
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 30,
  },
  button: {
    width: "80%",
    marginVertical: 10,
    borderRadius: 30,
  },
  buttonLabel: {
    fontSize: 18,
    padding: 5,
  },
});
