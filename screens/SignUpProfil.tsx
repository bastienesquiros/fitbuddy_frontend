import React, { useState, useEffect } from 'react';

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
    setBirthday(date);
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const [birthday, setBirthday] = useState<Date>(new Date());
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  // const [avatar, setAvatar] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [bio, setBio] = useState<string>('');

  const [forgetInput, setForgetInput] = useState<boolean>(false);

  const today = new Date();

  const handleRadioChange = (value: string) => {
    setGender(value);
  };

  const handleVerifyInput = () => {
    if (lastName === '' || firstName === '' || gender === '') {
      setForgetInput(true);
      console.log('birthday =>', birthday, today, gender);
    } else {
      navigation.navigate('SignUpSports');
      setForgetInput(false);
      console.log(lastName, firstName, bio, 'birthday =>', birthday, gender);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profil</Text>
      <View>
        <TextInput
          style={[styles.input, inputStates[0] && styles.inputFocus]}
          onFocus={() => handleFocus(0)}
          placeholder="Nom"
          onChangeText={(value: string) => setLastName(value)}
          value={lastName}
        />
        <TextInput
          style={[styles.input, inputStates[1] && styles.inputFocus]}
          onFocus={() => handleFocus(1)}
          placeholder="Prénom"
          onChangeText={(value: string) => setFirstName(value)}
          value={firstName}
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
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={
              gender === 'homme'
                ? styles.radioButtonSelected
                : styles.radioButton
            }
            onPress={() => handleRadioChange('homme')}
          >
            <Text style={styles.radioLabel}>Homme</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              gender === 'femme'
                ? styles.radioButtonSelected
                : styles.radioButton
            }
            onPress={() => handleRadioChange('femme')}
          >
            <Text style={styles.radioLabel}>Femme</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              gender === 'autre'
                ? styles.radioButtonSelected
                : styles.radioButton
            }
            onPress={() => handleRadioChange('autre')}
          >
            <Text style={styles.radioLabel}>Autre</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={[styles.inputBio, inputStates[2] && styles.inputFocus]}
          onFocus={() => handleFocus(2)}
          placeholder="Bio"
          onChangeText={(value: string) => setBio(value)}
          value={bio}
        />
      </View>
      {forgetInput && (
        <Text style={styles.error}>Il manque des informations.</Text>
      )}
      <TouchableOpacity
        onPress={() => handleVerifyInput()}
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
  input: {
    width: 250,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 10,
    padding: 5,
  },
  inputBio: {
    width: 250,
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
    width: 250,
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
    width: 150,
    height: 45,
    backgroundColor: '#1A256A',
    border: 1,
    borderRadius: 6,
    transition: '1s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    width: 70,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 5,
    padding: 5,
  },
  radioButtonSelected: {
    width: 70,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#F1600D',
    margin: 5,
    padding: 5,
  },
  radioLabel: {
    color: '#1A256A',
  },
  error: {
    color: 'red',
  },
});
