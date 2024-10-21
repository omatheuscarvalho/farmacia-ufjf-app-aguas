// ImageCropperScreen.js

import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ImageEditor } from "expo-image-editor";
import { Appbar, ActivityIndicator } from "react-native-paper";

export default function ImageCropperScreen({ route, navigation }) {
  const { imageUri } = route.params;
  const [isProcessing, setIsProcessing] = useState(false);
  const hasNavigatedRef = useRef(false);

  const handleSave = async (editedImage) => {
    if (hasNavigatedRef.current) return;
    hasNavigatedRef.current = true;
    console.log("Imagem salva:", editedImage);
    setIsProcessing(true);
    try {
      navigation.replace("ReportScreen", { photoUri: editedImage.uri });
    } catch (error) {
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    if (hasNavigatedRef.current) return;
    hasNavigatedRef.current = true;
    console.log("Edição cancelada");
    navigation.goBack();
  };

  if (isProcessing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} size="large" color="#00796B" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleCancel} />
        <Appbar.Content title="Cortar Imagem" />
      </Appbar.Header>
      <ImageEditor
        imageUri={imageUri}
        fixedCropAspectRatio={16 / 9}
        lockAspectRatio={false}
        minimumCropDimensions={{ width: 100, height: 100 }}
        onEditingComplete={handleSave}
        onCloseEditor={handleCancel}
        mode="crop-only"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
