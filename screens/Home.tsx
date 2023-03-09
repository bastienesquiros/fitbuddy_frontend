import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CardsContainer from '../components/CardsContainer';
import { Navigation } from '../models/Navigation';
import { addBookmarks } from '../reducers/bookmarks';
import { UserState } from '../reducers/user';
import { BookmarkState } from '../reducers/bookmarks';

export default function Home({ navigation }: Navigation) {
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = React.useState(false);

  const user = useSelector((state: { user: UserState }) => state.user.value);
  const bookmarks = useSelector(
    (state: { bookmarks: BookmarkState }) => state.bookmarks.value
  );
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const IP = '10.33.210.159';
  useEffect(() => {
    fetch(`http://${IP}:3000/users/bookmarks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json ' },
      body: JSON.stringify({ token: user.token }),
    })
      .then((response) => response.json())
      .then((bookmarkData) => {
        if (bookmarkData.result) {
          for (let i: number = 0; i < bookmarkData.bookmarks.length; i++) {
            dispatch(addBookmarks(bookmarkData.bookmarks[i]._id));
            // console.log('les bookmarks que jai deja', bookmarks);
          }
        } else {
        }
      });
  }, [refreshing]);

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
        <CardsContainer
          // bookmarkOption={true}
          screenName={'SeeAll'}
          title={'Tout voir'}
          route={'forme'}
        />
        <CardsContainer
          // bookmarkOption={true}
          screenName={'SeeAll'}
          title={'Découvertes'}
          route={'discover'}
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
    fontFamily: 'Mukta-Bold',
    color: 'white',
    fontSize: 35,
  },
});
