import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Message from '../components/Message';
import Card from '../components/Card';

export default function SeeAll() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card bookmarkOption={false} />
        <Card bookmarkOption={false} />
        <Card bookmarkOption={false} />
        <Card bookmarkOption={false} />
        <Card bookmarkOption={false} />
        <Card bookmarkOption={false} />
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
