import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function FullCard({ route }: any) {
  const eventData = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{eventData.sport}</Text>
        <Text style={styles.date}>{eventData.date.substring(0, 10)}</Text>
      </View>
      <View style={styles.headerBis}>
        <Text style={styles.author}>NAME</Text>
        <Text>Envoyer un message</Text>
      </View>
      <View style={styles.headerBis}>
        <Text style={styles.author}>Address: {eventData.distance}</Text>
        <Text>Bookmark</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.description}>{eventData.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.participants}>
          Participants: {eventData.players}/{eventData.totalPlayers}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.participants}>
          Participants: {eventData.players}/{eventData.totalPlayers}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBis: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'yellow',
    width: '100%',
    height: 50,
  },
  author: {},
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  date: {
    fontSize: 20,
  },
  content: {
    width: '100%',
    display: 'flex',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
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
    backgroundColor: 'orange',
    width: '100%',
    height: 200,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    width: '100%',
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
