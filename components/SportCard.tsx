import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SportCardProps = {
  key: number;
  sport: string;
  selected: boolean;
};

export default function SportCard(props: SportCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.sport}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 190,
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  contentContainer: {
    width: '100%',
    height: '70%',
  },
  title: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
    fontFamily: 'Mukta-Bold',
    textAlign: 'center',
  },
  textContainer: {
    width: '100%',
    height: '65%',
  },
});
