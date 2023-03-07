import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Scheduled() {
  return (
    <View style={styles.container}>
      <Text>A Venir Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
