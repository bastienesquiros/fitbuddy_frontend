import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

export default function Scheduled() {
  return (
    <View style={styles.container}>
      <Text>A Venir Screen</Text>
      <Card bookmarkOption={false}></Card>
      <Card bookmarkOption={false}></Card>
      <Card bookmarkOption={false}></Card>
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
