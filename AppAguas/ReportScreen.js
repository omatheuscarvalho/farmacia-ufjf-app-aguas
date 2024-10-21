// ReportScreen.js

import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Text, Title, Paragraph, Button } from "react-native-paper";

export default function ReportScreen({ route, navigation }) {
  const { photoUri } = route.params;

  if (!photoUri) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: Nenhuma foto disponível.</Text>
      </View>
    );
  }

  // Dados fictícios do relatório
  const reportData = {
    title: "Relatório de Análise",
    date: "21/10/2024",
    inspector: "João Silva",
    location: "São Paulo, SP",
    findings: "Nenhuma anomalia encontrada.",
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.photo} />
      <View style={styles.content}>
        <Title style={styles.title}>{reportData.title}</Title>
        <Paragraph>
          <Text style={styles.label}>Data: </Text>
          {reportData.date}
        </Paragraph>
        <Paragraph>
          <Text style={styles.label}>Inspetor: </Text>
          {reportData.inspector}
        </Paragraph>
        <Paragraph>
          <Text style={styles.label}>Local: </Text>
          {reportData.location}
        </Paragraph>
        <Paragraph>
          <Text style={styles.label}>Achados: </Text>
          {reportData.findings}
        </Paragraph>
      </View>
      <View style={styles.actions}>
        <Button
          icon="arrow-left"
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Voltar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  photo: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: "#00796B",
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    fontWeight: "bold",
    color: "#00796B",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: "48%",
  },
});
1;
