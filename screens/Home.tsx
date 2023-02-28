import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Message from '../components/Message';

export default function Home() {
  //   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Message navigation={navigation} /> */}
      <Text>Home Screen</Text>
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
