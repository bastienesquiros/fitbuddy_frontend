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
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../reducers/signup';
import { UserState } from '../reducers/signup';

type typeOfSportProps = {
  fields: {
    activite: string;
  };
};

export default function SignUpSports({ navigation }: Navigation) {
  const [sports, setSports] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const dispatch = useDispatch();
  const userSignUpData = useSelector(
    (state: { signup: UserState }) => state.signup.value
  );

  const handleSubmit = () => {
    dispatch(addUser({ sport: selectedSports, level: 'null' }));
    fetch('http://192.168.217.242:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userSignUpData,
      }),
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
      .catch((error) => {
        console.error('Error during sign up:', error);
      });

    navigation.navigate('TabNavigator');
  };

  useEffect(() => {
    // Fetch to retrieve sports names from API
    fetch(
      'https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es-activites&q=&rows=1000'
    )
      .then((response) => response.json())
      .then((sportsData) => {
        const typeOfSport = sportsData.records.map(
          (typeOfSportData: typeOfSportProps) => typeOfSportData.fields.activite
        );
        const uniqueSports = [...new Set(typeOfSport)].map(
          (sport) => sport as string
        );
        if (!sports.some((sport) => uniqueSports.includes(sport))) {
          setSports(uniqueSports);
        }
      });
  }, []);

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
      <ScrollView style={styles.cardContainer}>
        <View style={styles.cardContainerBis}>
          {sports
            .filter((sport) =>
              sport.toLowerCase().includes(search.toLowerCase())
            )
            .sort()
            .map((sport, index) => (
              <TouchableOpacity
                style={
                  selectedSports.includes(sport) ? styles.selectedCard : null
                }
                key={index}
                onPress={() =>
                  selectedSports.includes(sport)
                    ? setSelectedSports(
                        selectedSports.filter((s) => s !== sport)
                      )
                    : setSelectedSports([...selectedSports, sport])
                }
              >
                <SportCard
                  key={index}
                  sport={sport.substring(0, 40) + '...'}
                  selected={selectedSports.includes(sport)}
                />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit()}
        >
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  cardContainer: {
    width: '100%',
  },
  cardContainerBis: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedCard: {
    backgroundColor: '#F1600D',
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '8%',
  },
  filter: {
    marginTop: 40,
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
});
