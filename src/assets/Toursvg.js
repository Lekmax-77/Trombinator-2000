import React from 'react';
import { View, StyleSheet } from 'react-native';

const TourSvg = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shape1}></View>
      <View style={styles.shape2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 29,
    height: 41,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shape1: {
    width: 7.13542,
    height: 4.5,
    backgroundColor: '#34364C',
  },
  shape2: {
    width: 28.8281,
    height: 6,
    backgroundColor: '#34364C',
  },
});

export default TourSvg;
