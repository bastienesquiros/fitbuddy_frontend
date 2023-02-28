import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CardsContainer from '../components/CardsContainer';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CardsContainer bookmarkOption={true} />
        <CardsContainer bookmarkOption={false} />
        <CardsContainer bookmarkOption={true} />
        <CardsContainer bookmarkOption={true} />
      </ScrollView>
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
