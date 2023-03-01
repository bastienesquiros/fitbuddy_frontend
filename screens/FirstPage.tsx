import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Navigation } from '../models/Navigation';

export default function FirstPage({ navigation }: Navigation) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/fitbuddy_nobg.png')}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpInscription')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Inscription</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonGoogle}>
        <Text style={styles.buttonTextGoogle}>Connect With Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom:'30%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '7%',
    backgroundColor: 'white',
    border: 1,
    borderRadius: 50,
    transition: '1s',
    borderWidth: 1,
    margin: 20,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonGoogle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '62%',
    height: '7%',
    border: 1,
    borderRadius: 10,
    transition: '1s',
    borderWidth: 1,
    borderColor: '#1A256A',
    margin: 20,
    marginTop:'20%',
  },
  buttonTextGoogle: {
    color: '#1A256A',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
