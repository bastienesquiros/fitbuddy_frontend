import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <View>
      <Text style={[styles.logo]}>FitBuddy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Mukta-Bold',
  },
});
