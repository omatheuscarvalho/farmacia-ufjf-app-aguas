// ReportScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ReportScreen({ route }) {
  const { photoUri } = route.params;

  // Verifica se o photoUri existe
  if (!photoUri) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: Nenhuma foto disponível.</Text>
      </View>
    );
  }

  // Dados fictícios do relatório
  const reportData = {
    title: 'Relatório de Inspeção',
    date: '21/10/2024',
    inspector: 'João Silva',
    location: 'São Paulo, SP',
    findings: 'Nenhuma anomalia encontrada.',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{reportData.title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Data:</Text> {reportData.date}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Inspetor:</Text> {reportData.inspector}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Local:</Text> {reportData.location}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Achados:</Text> {reportData.findings}
        </Text>
      </View>
      <Image source={{ uri: photoUri }} style={styles.photo} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#555555',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555555',
  },
  photo: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 10,
    marginTop: 20,
  },
});
