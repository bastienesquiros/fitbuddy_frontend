import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import CardsContainer from '../components/CardsContainer';
import { Navigation } from '../models/Navigation';

export default function Home({ navigation }: Navigation) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
    fontFamily: 'Mukta-Bold',
    color: 'white',
    fontSize: 35,
  },
});
