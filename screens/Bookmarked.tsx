import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type BookmarkedProps = {
  navigation: NavigationProp<ParamListBase>;
};

export default function Bookmarked({ navigation }: BookmarkedProps) {
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
