import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LogoProps } from '../models/Logo';

export default function Logo(props: LogoProps) {
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
