import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Card from './Card';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLocState } from '../reducers/userLoc';
import React from 'react';
import { SignInState } from '../reducers/signIn';

type cardProps = {
  screenName: string;
  // bookmarkOption: boolean;
  title: string;
  route: string;
};

export default function CardsContainer(props: cardProps) {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const [refreshing, setRefreshing] = React.useState(false);
  const [cardsData, setCardsData] = useState<[]>([]);

  const userLoc = useSelector(
    (state: { userLoc: UserLocState }) => state.userLoc.value
  );

  const userToken = useSelector(
    (state: { signIn: SignInState }) => state.signIn.value
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const IP = '10.33.210.195';

  useEffect(() => {
    fetch(`http://${IP}:3000/events/${props.route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: userToken.token }),
    })
      .then((response) => response.json())
      .then((eventsData) => {
        setCardsData(eventsData.events);
      });
  }, [refreshing]);

  const distanceNumber = function (long: number, lat: number) {
    let lat1: number = userLoc.lat;
    let lng1: number = userLoc.long;
    let lat2: any = lat;
    let lng2: any = long;
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  };
  function deg2rad(deg: number) {
    return (deg * Math.PI) / 180;
  }

  const cards = cardsData.map((card: any, j) => {
    let distanceNb;
    const dateFormat: any = new Date(card.date).toUTCString();
    if (
      userLoc.lat !== null ||
      userLoc.lat !== undefined ||
      userLoc.lat !== 0
    ) {
      distanceNb = distanceNumber(card.address[0], card.address[1]);
    }
    return (
      <Card
        key={j}
        {...card}
        sport={card.sport}
        date={dateFormat.substring(0, 16)}
        description={card.description.substring(0, 110) + '...'}
        totalPlayers={card.totalPlayers}
        participants={card.players.length}
        // bookmarkOption={props.bookmarkOption}
        firstName={card.author.firstName}
        pseudo={card.author.pseudo}
        distance={distanceNb}
        cardId={card._id}
      />
    );
  });

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(props.screenName)}>
          <Text style={styles.buttonSeeAll}>Tout voir</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={styles.scroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {cards}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    height: 250,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Mukta-Bold',
  },
  buttonSeeAll: {
    fontSize: 18,
    fontFamily: 'Mukta-Regular',
  },
  scroll: {
    marginLeft: 10,
    marginRight: 10,
  },
});
