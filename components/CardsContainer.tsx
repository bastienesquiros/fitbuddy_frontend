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
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { UserState } from '../reducers/user';
import React from 'react';

type cardProps = {
  screenName: string;
  // bookmarkOption: boolean;
  title: string;
  route: string;
};

export default function CardsContainer(props: cardProps) {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const [cardsData, setCardsData] = useState<[]>([]);

  const user = useSelector((state: { user: UserState }) => state.user.value);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch(`https://fitbuddy-backend.vercel.app/events/${props.route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token }),
    })
      .then((response) => response.json())
      .then((eventsData) => {
        setCardsData(eventsData.events);
      });
  }, [isFocused]);

  const distanceNumber = function (long: number, lat: number) {
    let lat1: number = user.lat;
    let lng1: number = user.long;
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

  const cards = cardsData
    // .sort((e: any, f: any) => {
    //   const dateFormat1: number = new Date(e.date).getTime();
    //   const dateFormat2: number = new Date(f.date).getTime();
    //   return dateFormat1 - dateFormat2;
    // })
    .map((card: any, j) => {
      let distanceNb;
      const dateFormat: any = new Date(card.date).toUTCString();
      if (user.lat !== null || user.lat !== undefined || user.lat !== 0) {
        distanceNb = distanceNumber(card.address[0], card.address[1]);
      }
      return (
        <Card
          key={j}
          // {...card}

          sport={
            card.sport.length > 13
              ? card.sport.substring(0, 13) + '...'
              : card.sport
          }
          date={dateFormat.substring(0, 16)}
          description={card.description}
          totalPlayers={card.totalPlayers}
          participants={card.players.length}
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
        {/* <TouchableOpacity onPress={() => navigation.navigate(props.screenName)}>
          <Text style={styles.buttonSeeAll}>Tout voir</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView
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
