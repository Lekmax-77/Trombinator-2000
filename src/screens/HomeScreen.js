import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import WeatherWidget from '../components/WeatherWidget';
import ChessWidget from '../components/ChessWidget';
import { useNavigation } from '@react-navigation/native';


const HomeScreen  = ({ token }) => {


  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <WeatherWidget />
      <ChessWidget />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
