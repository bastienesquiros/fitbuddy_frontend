import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../reducers/signup';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Navigation } from '../models/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpInscription({ navigation }: Navigation) {
  // Created an inputStates array to store the state of each input tag. Added a handleFocus function that takes an index as an argument and updates the input tags' state accordingly. This function uses the fill method to set all values to false except for the current index, which is set to true.
  // Modified how we apply the onFocus effect to each input tag by using the current index to determine which tag is active.

  const [inputStates, setInputStates] = useState<Array<boolean>>([
    false,
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

  const [pseudo, setPseudo] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordAgain, setPasswordAgain] = useState<string>('');

  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [forgetInput, setForgetInput] = useState<boolean>(false);

  const EMAIL_REGEX: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleVerifyPassword = () => {
    if (email === '' || pseudo === '' || password === '') {
      setForgetInput(true);
    } else {
      setForgetInput(false);
      if (password === passwordAgain && EMAIL_REGEX.test(email)) {
        navigation.navigate('SignUpProfil');
        console.log('navigate');
        console.log(pseudo, email, password, passwordAgain);
        setPasswordError(false);
      } else {
        setPasswordError(true);
        console.log('mauvais mot de passe');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Formulaire d'inscription</Text>
      <View style={styles.inputs}>
        <TextInput
          style={[styles.input, inputStates[0] && styles.inputFocus]}
          onFocus={() => handleFocus(0)}
          placeholder="Pseudo"
          onChangeText={(value: string) => setPseudo(value)}
          value={pseudo}
        />
        <TextInput
          style={[styles.input, inputStates[1] && styles.inputFocus]}
          onFocus={() => handleFocus(1)}
          placeholder="Adresse mail"
          onChangeText={(value: string) => setEmail(value)}
          value={email}
        />
        <TextInput
          style={[styles.input, inputStates[2] && styles.inputFocus]}
          onFocus={() => handleFocus(2)}
          placeholder="Mot de passe"
          onChangeText={(value: string) => setPassword(value)}
          value={password}
        />
        <TextInput
          style={[styles.input, inputStates[3] && styles.inputFocus]}
          onFocus={() => handleFocus(3)}
          placeholder="Répétez votre mot de passe"
          onChangeText={(value: string) => setPasswordAgain(value)}
          value={passwordAgain}
        />
      </View>
      {forgetInput && (
        <Text style={styles.error}>Il manque des informations.</Text>
      )}
      {passwordError && (
        <Text style={styles.error}>Email ou mot de passe incorrect.</Text>
      )}
      <TouchableOpacity
        onPress={() => handleVerifyPassword()}
        style={styles.button}
      >
        <Text style={styles.buttonText}> Inscription </Text>
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
  inputFocus: {
    borderColor: '#F1600D',
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
  buttonText: {
    fontFamily: 'Mukta-Bold',
    fontSize: 18,
    color: 'white',
  },
  error: {
    color: 'red',
  },
});
