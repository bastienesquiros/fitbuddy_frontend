import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { logout, UserState } from '../reducers/user';
import { deleteBookmarks } from '../reducers/bookmarks';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '../models/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Profil({ navigation }: Navigation) {
  const user = useSelector((state: { user: UserState }) => state.user.value);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('FirstPage');
  };
  return (
    <View style={styles.container}>
      <View style={styles.profil}>
        <View style={styles.avatar}>
          <FontAwesomeIcon
            icon={faUser}
            size={70}
          />
          <View style={styles.identity}>
            <Text style={styles.name}>{user.firstName}</Text>
            <Text style={styles.name}> {user.lastName}</Text>
            <Text style={styles.pseudo}> @{user.pseudo}</Text>
          </View>
        </View>
        <Text style={styles.bio}>{user.bio}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogout()}
      >
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  profil: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    height: 120,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  identity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  name: {
    height: 35,
    fontSize: 20,
    fontFamily: 'Mukta-Regular',
  },
  pseudo: {
    fontFamily: 'Mukta-Regular',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 45,
    backgroundColor: 'red',
    border: 1,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: 'Mukta-Bold',
    fontSize: 18,
    color: 'white',
  },
  bio: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: '80%',
    height: 150,
    padding: 10,
  },
});
