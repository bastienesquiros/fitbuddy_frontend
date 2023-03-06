import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navigation } from '../models/Navigation';

export default function FullCard({ route }: any, { navigation }: Navigation) {
  const eventData = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{eventData.sport}</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
  },
});
