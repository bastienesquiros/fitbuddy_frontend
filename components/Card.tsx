import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Bookmark from './Bookmark';
// import { NavigationProp, ParamListBase } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

type bookmarkProps = {
  firstName: string;
  pseudo: string;
  description: string;
  date: any;
  sport: string;
  totalPlayers: number;
  participants: number;
  distance: number;
  bookmarkOption: boolean;
};

export default function Card(props: bookmarkProps) {
  // const navigation = useNavigation<NavigationProp<ParamListBase>>();

  // const handlePress = (props: any[]) => {
  //   navigation.navigate('FullCard', props);
  // };

  return (
    <>
      <TouchableOpacity
      // onPress={() => handlePress()}
      >
        <View style={styles.card}>
          <View style={styles.topCard}>
            <View style={styles.topCardLeft}>
              <View style={styles.user}>
                <FontAwesomeIcon
                  icon={faUser}
                  size={40}
                />
                <Text style={styles.name}>
                  {props.firstName} @{props.pseudo}
                </Text>
                <Text style={styles.distance}>
                  à {Math.trunc(props.distance)} km
                </Text>
              </View>
              <View style={styles.title}>
                <Text style={styles.sport}>{props.sport}</Text>
                <Text>{props.date}</Text>
              </View>
            </View>
            {props.bookmarkOption && <Bookmark />}
          </View>
          <Text style={styles.description}>{props.description}</Text>
          <View style={styles.bottomCard}>
            <View style={styles.participants}>
              <Text style={styles.participantsText}>
                Participants : {props.participants}/{props.totalPlayers}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: 330,
    height: 180,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 7,
    padding: 10,
    backgroundColor: 'white',
    // Shadow of the component
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  topCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topCardLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Mukta-Regular',
    lineHeight: 30,
    fontSize: 18,
  },
  distance: {
    fontFamily: 'Mukta-Regular',
    lineHeight: 16,
    fontSize: 13,
  },
  title: {
    fontFamily: 'Mukta-Regular',
    marginLeft: 15,
  },
  sport: {
    fontSize: 20,
  },
  date: {
    fontFamily: 'Mukta-Regular',
    fontSize: 13,
  },
  description: {
    fontFamily: 'Mukta-Regular',
    marginLeft: 10,
  },
  bottomCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  participants: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  participantsText: {
    fontSize: 13,
    fontFamily: 'Mukta-Regular',
  },
  participantsLogo: {
    color: 'grey',
  },
  infoIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconInfo: {
    margin: 2,
  },
  moodIcon: {
    color: 'green',
  },
  levelIcon: {
    color: 'red',
  },
});
