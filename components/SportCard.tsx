import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Picker from './Picker';

type SportCardProps = {
  sport: string;
};

export default function SportCard(props: SportCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.sport}</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Picker />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 90,
    width: 250,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  pickerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginLeft: 5,
    fontFamily: 'Mukta-Bold',
  },

  textContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
});
