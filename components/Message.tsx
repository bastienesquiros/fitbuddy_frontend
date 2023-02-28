import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Navigation } from '../models/Navigation';

export default function Message({ navigation }: Navigation) {
  const handlePress = () => {
    navigation.navigate('Inbox');
    navigation.navigate('Inbox');
  };

  return (
    <View>
      <Pressable onPress={handlePress}>
        <FontAwesome
          style={styles.margin}
          name={'paper-plane'}
          size={32.5}
          color={'#1A256A'}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginLeft: -50,
  },
});
