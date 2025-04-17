import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChambaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Chamba</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ChambaScreen; 