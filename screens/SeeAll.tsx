import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardsContainer from '../components/CardsContainer';

export default function SeeAll() {
  return (
    <View style={styles.container}>
      <Text>See All</Text>
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
