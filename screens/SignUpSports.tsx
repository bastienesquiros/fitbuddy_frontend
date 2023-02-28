import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type SignUpSportsProps = {
  navigation: NavigationProp<ParamListBase>;
};

export default function SignUpSports({ navigation }: SignUpSportsProps) {
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
