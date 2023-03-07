import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Navigation } from '../models/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as Location from 'expo-location';
import { addLocation } from '../reducers/userLoc';

export default function FirstPage({ navigation }: Navigation) {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        console.log('longitude:', location.coords.latitude);
        console.log('latitude:', location.coords.longitude);

        dispatch(
          addLocation({
            lat: location.coords.latitude,
            long: location.coords.longitude,
          })
        );
      }
    })();
  }, []);

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
    marginBottom: '30%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '7%',
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    margin: 20,
  },
  buttonText: {
    fontFamily: 'Mukta-Bold',
    fontSize: 20,
  },
  buttonGoogle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '62%',
    height: '7%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1A256A',
    backgroundColor: 'white',
    margin: 20,
    marginTop: '20%',
  },
  buttonTextGoogle: {
    fontFamily: 'Mukta-Bold',
    fontSize: 20,
    color: '#1A256A',
  },
});
