import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Navigation } from '../models/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function SignUpProfil({ navigation }: Navigation) {
  const [inputStates, setInputStates] = useState<Array<boolean>>([
    false,
    false,
    false,
  ]);

  const handleFocus = (index: number) => {
    const newInputStates = [...inputStates];
    newInputStates.fill(false);
    newInputStates[index] = true;
    setInputStates(newInputStates);
  };

  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <View style={styles.inputs}>
        <TextInput
          style={[styles.input, inputStates[0] && styles.inputFocus]}
          onFocus={() => handleFocus(0)}
          placeholder="Nom"
        />
        <TextInput
          style={[styles.input, inputStates[1] && styles.inputFocus]}
          onFocus={() => handleFocus(1)}
          placeholder="Prénom"
        />
        <TouchableOpacity
          style={styles.buttonDate}
          onPress={showDatePicker}
        >
          <Text style={styles.dateText}>Date de Naissance</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <TextInput
          style={[styles.inputBio, inputStates[2] && styles.inputFocus]}
          onFocus={() => handleFocus(2)}
          placeholder="Bio"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpSports')}
        style={styles.button}
      >
        <Text style={styles.buttontext}> Suivant </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontFamily: 'Mukta-Regular',
    fontSize: 24,
  },
  inputs: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'Mukta-Bold',
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 10,
    padding: 5,
  },
  inputBio: {
    width: '70%',
    height: 150,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 10,
    padding: 5,
  },
  inputFocus: {
    borderColor: '#F1600D',
  },
  buttonDate: {
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 10,
    padding: 5,
  },
  dateText: {
    paddingTop: 5,
    paddingBottom: 5,
    color: 'grey',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 45,
    backgroundColor: '#1A256A',
    border: 1,
    borderRadius: 6,
  },
  buttontext: {
    fontFamily: 'Mukta-Bold',
    fontSize: 18,
    color: 'white',
  },
});
