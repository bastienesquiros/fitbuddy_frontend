import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Pressable, StyleSheet, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Navigation } from '../models/Navigation';

export default function Message({ navigation }: Navigation) {
  const handlePress = () => {
    navigation.navigate('Inbox');
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <FontAwesome
          name={'paper-plane'}
          size={32.5}
          color={'#1A256A'}
          style={styles.buttonMessage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonMessage: {
    marginRight: Platform.OS === 'ios' ? 20 : 0,
  },
});
