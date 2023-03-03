import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Bookmark from './Bookmark';
import { useEffect, useState } from 'react';

type bookmarkProps = {
  bookmarkOption: boolean;
};

// Temporary table
const tabCard = {
  author: [{ firstName: 'Sophie', lastName: 'Serais' }],
  sport: 'Football',
  address: [{ lat1: 44, lng1: 0 }],
  lat2: 48,
  lng2: 2,
  description:
    'Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!! Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!! Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!! Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!!',
  totalPlayers: 3,
  date: '28 mars 2023',
  players: [{ player1: 1 }, { player2: 2 }],
};

export default function Card(props: bookmarkProps) {
  const [distance, setDistance] = useState(0);
  // Display only x characters in description
  let descriptionData: string = tabCard.description;
  if (descriptionData.length > 110) {
    descriptionData = descriptionData.substring(0, 110) + '....';
  }

  // Display the distance between the person and the event
  useEffect(() => {
    const distanceNumber = function () {
      let lat1: number = tabCard.address[0].lat1;
      let lng1: number = tabCard.address[0].lng1;
      let lat2: number = tabCard.lat2;
      let lng2: number = tabCard.lng2;
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
    setDistance(distanceNumber);
  }, []);

  // Automated color change of logoInfo
  // const displayedCard = selectedCard.map((card: any, i: any) => {
  //   {
  //     /* Code of card */
  //   }
  //   <View style={styles.card}></View>;

  //   {
  //     /* Change of color according to the level, example */
  //   }
  //   {
  //     card.level === 'easy' && (
  //       <View style={styles.difficulty}>
  //         <FontAwesomeIcon
  //           icon={faLeaf}
  //           size={40}
  //           color={'#5db194'}
  //         />
  //       </View>
  //     );
  //   }
  // });

  // Combine the styles of 2 different types of properties, for icons info
  // const moodIcon: StyleProp<TextStyle> = [styles.moodIcon, styles.iconInfo];
  // const levelIcon: StyleProp<TextStyle> = [styles.levelIcon, styles.iconInfo];

  return (
    <View style={styles.card}>
      <View style={styles.topCard}>
        <View style={styles.topCardLeft}>
          <View style={styles.user}>
            <FontAwesomeIcon
              icon={faUser}
              size={40}
            />
            <Text style={styles.name}>
              {tabCard.author[0].firstName} {tabCard.author[0].lastName}
            </Text>
            <Text style={styles.distance}>à {Math.trunc(distance)} km</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.sport}>{tabCard.sport}</Text>
            <Text style={styles.date}>{tabCard.date}</Text>
          </View>
        </View>
        {props.bookmarkOption && <Bookmark />}
      </View>
      <Text style={styles.description}>{descriptionData}</Text>
      <View style={styles.bottomCard}>
        <View style={styles.participants}>
          <Text style={styles.participantsText}>
            Participants : {tabCard.players.length}/{tabCard.totalPlayers}
          </Text>
          {/* Part to display participants with avatar: optionnal */}
          {/* <FontAwesomeIcon
            style={styles.participantsLogo}
            icon={faCircle}
            size={20}
          />
          <FontAwesomeIcon
            style={styles.participantsLogo}
            icon={faCircle}
            size={20}
          /> */}
        </View>
        {/* Part to display the level and mood */}
        {/* <View style={styles.infoIcon}>
          <FontAwesomeIcon
            style={moodIcon}
            icon={faLeaf}
            size={20}
          />
          <FontAwesomeIcon
            style={levelIcon}
            icon={faFireFlameCurved}
            size={20}
          />
        </View> */}
      </View>
    </View>
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
