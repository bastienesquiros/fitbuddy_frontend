import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import signIn, { UserState } from '../reducers/user';
import Card from '../components/Card';

export default function Bookmarked() {
  const [cardsData, setCardsData] = useState<[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const isFocused = useIsFocused();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const user = useSelector((state: { user: UserState }) => state.user.value);

  useEffect(() => {
    fetch(`https://fitbuddy-backend.vercel.app/users/bookmarks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token }),
    })
      .then((response) => response.json())
      .then((bookmarksData) => {
        if (bookmarksData.result) {
          setCardsData(bookmarksData.bookmarks);
        } else {
          setCardsData([]);
        }
      });
  }, [refreshing, isFocused]);

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

  const cards = cardsData.map((card: any, j) => {
    let distanceNb;
    const dateFormat: any = new Date(card.date).toUTCString();
    if (user.lat !== null || user.lat !== undefined || user.lat !== 0) {
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
        firstName={card.author.firstName}
        pseudo={card.author.pseudo}
        distance={distanceNb}
        cardId={card._id}
      />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {cards}
      </ScrollView>
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
});
