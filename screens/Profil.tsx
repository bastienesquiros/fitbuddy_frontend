import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { logout, UserState } from '../reducers/user';
import { deleteBookmarks } from '../reducers/bookmarks';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '../models/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function Profil({ navigation }: Navigation) {
  const user = useSelector((state: { user: UserState }) => state.user.value);
  // console.log(user.firstName);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    // dispatch(deleteBookmarks());
    navigation.navigate('FirstPage');
  };
  return (
    <View style={styles.container}>
      <View>{/* <FontAwesomeIcon icon={'user'}></FontAwesomeIcon> */}</View>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
