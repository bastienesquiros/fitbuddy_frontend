import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardsContainer from '../components/CardsContainer';

type SeeAllProps = {
  title: string;
};

export default function SeeAll(props: SeeAllProps) {
  return (
    <View style={styles.container}>
      <Text>See All</Text>
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
