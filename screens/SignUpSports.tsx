import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Navigation } from '../models/Navigation';
import SportCard from '../components/SportCard';
import { useState, useEffect } from 'react';

type typeOfSportProps = {
  recordid: string;
  fields: {
    activite: string;
    niveau: string;
  };
};

export default function SignUpSports({ navigation }: Navigation) {
  const [activites, setActivites] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    fetch(
      'https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es-activites&q=&rows=10'
    )
      .then((response) => response.json())
      .then((sportsData) => {
        const typeOfSport = sportsData.records.map(
          (typeOfSport: typeOfSportProps) => typeOfSport.fields.activite
        );
        setActivites(typeOfSport);
      });
  }, []);

  console.log(search);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TextInput
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholder="Chercher un sport"
          style={styles.filter}
        ></TextInput>
      </View>
      <View style={styles.cardContainer}>
        <ScrollView>
          {activites
            .filter((sport) =>
              sport.toLowerCase().includes(search.toLowerCase())
            )
            .sort()
            .map((sport, index) => (
              <SportCard
                key={index}
                sport={sport.substring(0, 35) + '...'}
              />
            ))}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15%',
  },
  buttonContainer: {
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },
  filter: {
    marginTop: 30,
    backgroundColor: 'white',
    width: 360,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
