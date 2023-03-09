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
import AddressInput from '../components/AddressInput';
import { useSelector } from 'react-redux';
import { InputEventState } from '../reducers/inputCoords';
import { UserState } from '../reducers/user';

export default function AddEvent({ navigation }: Navigation) {
  // Created an inputStates array to store the state of each input tag. Added a handleFocus function that takes an index as an argument and updates the input tags' state accordingly. This function uses the fill method to set all values to false except for the current index, which is set to true.
  // Modified how we apply the onFocus effect to each input tag by using the current index to determine which tag is active.
  const [inputStates, setInputStates] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ]);

  const [sport, setSport] = useState<string | undefined>();
  const [date, setDate] = useState<Date>(new Date());
  const [totalPlayers, setTotalPlayers] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);

  const eventLoc = useSelector(
    (state: { inputEvent: InputEventState }) => state.inputEvent.value
  );
  const user = useSelector((state: { user: UserState }) => state.user.value);

  const handleFocus = (index: number) => {
    const newInputStates = [...inputStates];
    newInputStates.fill(false);
    newInputStates[index] = true;
    setInputStates(newInputStates);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDate(date);
    hideDatePicker();
  };

  const IP = '10.33.210.159';

  const handleAddEvent = () => {
    fetch(`http://${IP}:3000/events/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: user.token,
        sport: sport,
        date: date,
        address: eventLoc.coords,
        totalPlayers: totalPlayers,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          navigation.navigate('Home');
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ajouter un événement</Text>
      <View style={styles.inputs}>
        <TextInput
          style={[styles.input, inputStates[0] && styles.inputFocus]}
          onFocus={() => handleFocus(0)}
          placeholder="Sport"
          onChangeText={(value: string) => setSport(value)}
          value={sport}
        />
        <TouchableOpacity
          style={styles.buttonDate}
          onPress={showDatePicker}
        >
          <Text style={styles.dateText}>Date</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <AddressInput />
        <TextInput
          style={[styles.input, inputStates[1] && styles.inputFocus]}
          onFocus={() => handleFocus(1)}
          placeholder="Nombre de participants"
          onChangeText={(value: string) => setTotalPlayers(value)}
          value={totalPlayers}
        />
        <TextInput
          style={[styles.inputDescription, inputStates[2] && styles.inputFocus]}
          onFocus={() => handleFocus(2)}
          placeholder="Description..."
          onChangeText={(value: string) => setDescription(value)}
          value={description}
        />
      </View>
      <TouchableOpacity
        onPress={() => handleAddEvent()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  adressInput: {},
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
    margin: 20,
    padding: 5,
  },
  inputFocus: {
    borderColor: '#F1600D',
  },
  button: {
    width: 150,
    height: 45,
    backgroundColor: '#1A256A',
    border: 1,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Mukta-Bold',
    fontSize: 18,
    color: 'white',
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
  inputDescription: {
    fontFamily: 'Mukta-Bold',
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    margin: 20,
    padding: 5,
    height: '20%',
  },
});
