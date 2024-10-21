// Telainicial.js

import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Button, Text, Title } from "react-native-paper";

export default function Telainicial({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Title style={styles.title}>Análise de pH da Água</Title>
        <Text style={styles.subtitle}>Farmácia UFJF</Text>
        <Button
          mode="contained"
          icon="water"
          onPress={() => navigation.navigate("SelectionScreen")}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          Iniciar Análise
        </Button>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F7FA", // Fundo azul claro para representar água
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#00796B",
    fontSize: 32,
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    color: "#004D40",
    fontSize: 24,
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    width: "80%",
    borderRadius: 30,
    backgroundColor: "#00796B",
  },
  buttonLabel: {
    fontSize: 18,
    padding: 5,
    color: "#FFFFFF",
  },
});
