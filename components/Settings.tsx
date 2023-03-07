import React from 'react';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Navigation } from '../models/Navigation';

export default function SettingsIcon({ navigation }: Navigation) {
  const handlePress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <FontAwesome
          name={'gear'}
          size={32.5}
          color={'#1A256A'}
          style={styles.buttonSetting}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSetting: {
    marginRight: Platform.OS === 'ios' ? 20 : 0,
  },
});
