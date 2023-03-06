import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CardsContainer from '../components/CardsContainer';
import { Navigation } from '../models/Navigation';
import * as Location from 'expo-location';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocation } from '../reducers/user';

export default function Home({ navigation }: Navigation) {
  const dispatch = useDispatch();
  //const locationReduc = useSelector((state: any) => state.user.value);
  const [lat, setLat] = useState<any>();
  const [long, setLong] = useState<any>();
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLong(location.coords.longitude);
      }
      dispatch(addLocation({ lat: lat, long: long }));
    })();
  }, []);

  // console.log('location reducer: '+ locationReduc.lat);

  return (
    <View style={styles.container}>
      <ScrollView>
        <CardsContainer
          bookmarkOption={true}
          screenName={'SeeAll'}
        />
        <CardsContainer
          bookmarkOption={false}
          screenName={'SeeAll'}
        />
        <CardsContainer
          bookmarkOption={true}
          screenName={'SeeAll'}
        />
        <CardsContainer
          bookmarkOption={true}
          screenName={'SeeAll'}
        />
      </ScrollView>
      <TouchableOpacity
        style={styles.addEvent}
        onPress={() => navigation.navigate('AddEvent')}
      >
        <View>
          <Text style={styles.addEventText}>+</Text>
        </View>
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
  addEvent: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F69F6D',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addEventInstruction: {
    color: 'grey',
    fontFamily: 'Mukta-Bold',
    fontSize: 20,
  },
  addEventText: {
    // bottom: 10,
    fontFamily: 'Mukta-Bold',
    color: 'white',
    fontSize: 35,
  },
});
