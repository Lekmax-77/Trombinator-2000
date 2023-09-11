import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherWidget = () => {
  // Logique pour afficher les données météo ici

  return (
    <View style={styles.container}>
      {/* Affichez les données météo ici */}
      <Text>Météo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles du widget météo
  },
});

export default WeatherWidget;
