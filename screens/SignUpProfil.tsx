import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type SignUpProfilProps = {
  navigation: NavigationProp<ParamListBase>;
};

export default function SignUpProfil({ navigation }: SignUpProfilProps) {
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
      <Text>Profil</Text>
      <View>
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
        onPress={() => navigation.navigate('SignUpProfil')}
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
});
