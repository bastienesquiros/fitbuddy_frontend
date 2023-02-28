import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from '../models/Navigation';

export default function Bookmarked({ navigation }: Navigation) {
  return (
    <View style={styles.container}>
      <Text>Bookmarked Screen</Text>
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
