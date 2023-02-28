import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from '../models/Navigation';

export default function SignUpInscription({ navigation }: Navigation) {
  return (
    <View style={styles.container}>
      <Text>Sign Up Inscription</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUpProfil')}>
        <Text>Go to Next Sign Up Page </Text>
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
