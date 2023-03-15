import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from '../models/Navigation';
import Bookmark from '../components/Bookmark';
import events, { addEvent, removeEvent, EventState } from '../reducers/events';
import { useSelector } from 'react-redux';
import { UserState } from '../reducers/user';
import { useDispatch } from 'react-redux';

type FullCardProps = {
  route: any;
  navigation: Navigation;
};

export default function FullCard({ route, navigation }: FullCardProps) {
  const eventData = route.params;
  const dispatch = useDispatch();
  const events = useSelector(
    (state: { events: EventState }) => state.events.value
  );

  const user = useSelector((state: { user: UserState }) => state.user.value);

  const eventId = eventData.cardId;

  const isMatching = events.some((id) => eventId === id);

  let iconStyle: any = {
    width: 150,
    height: 45,
    backgroundColor: '#1A256A',
    border: 1,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  if (isMatching) {
    iconStyle = {
      width: 150,
      height: 45,
      backgroundColor: 'red',
      border: 1,
      borderRadius: 6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  const handleClick = () => {
    if (isMatching) {
      fetch(`https://fitbuddy-backend.vercel.app/users/removeevent`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: eventId,
          token: user.token,
        }),
      })
        .then((response) => response.json())
        .then((eventDeleteData) => {
          const result = eventDeleteData.result;
          if (result) {
            dispatch(removeEvent(eventId));
          }
        });
    } else {
      fetch(`https://fitbuddy-backend.vercel.app/users/addevent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: eventId,
          token: user.token,
        }),
      })
        .then((response) => response.json())
        .then((eventAddData) => {
          const result = eventAddData.result;
          if (result) {
            dispatch(addEvent(eventId));
          }
        });
    }
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.sport}>{eventData.sport}</Text>
          <Text style={styles.author}>{eventData.firstName}</Text>
          <Text style={styles.distance}>
            Distance: {Math.round(eventData.distance)}KM
          </Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.date}>{eventData.date}</Text>
          <TouchableOpacity>
            <Text>Envoyer un message</Text>
          </TouchableOpacity>
          <Bookmark cardId={eventData.cardId} />
        </View>
      </View>
      <View style={styles.scrollContainerBorder}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.description}>{eventData.description}</Text>
          </View>
        </ScrollView>
      </View>
      <View />
      <View style={styles.footer}>
        <Text style={styles.participants}>
          Participants: {eventData.players}/{eventData.totalPlayers}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={iconStyle}
          onPress={() => handleClick()}
        >
          <Text style={styles.buttonText}>
            {!isMatching ? 'PARTICIPER' : 'ME DESINSCRIRE'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 150,
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerLeft: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  headerRight: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  scrollContainerBorder: {
    borderWidth: 1,
    height: 400,
  },
  content: {
    height: 500,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingHorizontal: 20,
  },

  author: {
    fontSize: 25,
  },
  distance: {
    fontSize: 15,
  },
  sport: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  date: {
    fontSize: 20,
  },
  participants: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    borderRadius: 1,
    borderColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // iconStyle: {
  //   width: 150,
  //   height: 45,
  //   backgroundColor: '#1A256A',
  //   border: 1,
  //   borderRadius: 6,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  buttonText: {
    fontFamily: 'Mukta-Bold',
    fontSize: 18,
    color: 'white',
  },
});
