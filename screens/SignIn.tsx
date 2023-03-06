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
import { useDispatch, useSelector } from 'react-redux';
import { login, UserState } from '../reducers/user';

export default function SignIn({ navigation }: Navigation) {
  // Created an inputStates array to store the state of each input tag. Added a handleFocus function that takes an index as an argument and updates the input tags' state accordingly. This function uses the fill method to set all values to false except for the current index, which is set to true.
  // Modified how we apply the onFocus effect to each input tag by using the current index to determine which tag is active.

  const dispatch = useDispatch();

  const userToken = useSelector(
    (state: { user: UserState }) => state.user.value
  );
  console.log(userToken);

  const IP = '10.33.210.195';

  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [wrongcreditentials, setWrongCreditentials] = useState<boolean>(false);

  const [inputStates, setInputStates] = useState<Array<boolean>>([
    false,
    false,
  ]);

  const handleFocus = (index: number) => {
    const newInputStates = [...inputStates];
    newInputStates.fill(false);
    newInputStates[index] = true;
    setInputStates(newInputStates);
  };

  const handleSignIn = () => {
    fetch(`http://${IP}:3000/users/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.result) {
          dispatch(login({ token: res.token }));
          navigation.navigate('TabNavigator');
          // console.log(res);
        } else {
          setWrongCreditentials(true);
          // console.log(res);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <View style={styles.inputs}>
        <TextInput
          style={[styles.input, inputStates[0] && styles.inputFocus]}
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          onFocus={() => handleFocus(0)}
          placeholder="Adresse mail"
        />
        <TextInput
          style={[styles.input, inputStates[1] && styles.inputFocus]}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          onFocus={() => handleFocus(1)}
          placeholder="Mot de passe"
        />
      </View>
      <TouchableOpacity
        onPress={() => handleSignIn()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      {wrongcreditentials && (
        <Text style={styles.error}>Wrong Creditentials</Text>
      )}
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
  error: {
    fontFamily: 'Mukta-Regular',
    fontSize: 18,
    color: 'red',
  },
});
