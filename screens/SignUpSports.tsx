import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from '../models/Navigation';

export default function SignUpSports({ navigation }: Navigation) {
  return (
    <View style={styles.container}>
      <Text>SignUpSports</Text>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
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
