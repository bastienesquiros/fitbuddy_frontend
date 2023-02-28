import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type FirstPageProps = {
  navigation: NavigationProp<ParamListBase>;
};

export default function FirstPage({ navigation }: FirstPageProps) {
  return (
    <View style={styles.container}>
      <Text>FirstPage</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpInscription')}
      >
        <Text>Go to Sign Up Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text>Go to Sign In</Text>
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
