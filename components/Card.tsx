import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleProp,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faCircle,
  faLeaf,
  faFireFlameCurved,
} from '@fortawesome/free-solid-svg-icons';
import Bookmark from './Bookmark';

type bookmarkProps = {
  bookmarkOption: boolean;
};

export default function Card(props: bookmarkProps) {
  // Display only x characters in description
  let description: string =
    'Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!! Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!! Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!! Salut qui veut faire du foot les gars jadore le foot mia le foot les ballons et tout hahaha !!!!';
  if (description.length > 115) {
    description = description.substring(0, 115) + '....';
  }

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
  const moodIcon: StyleProp<TextStyle> = [styles.moodIcon, styles.iconInfo];
  const levelIcon: StyleProp<TextStyle> = [styles.levelIcon, styles.iconInfo];

  return (
    <View style={styles.card}>
      <View style={styles.topCard}>
        <View style={styles.topCardLeft}>
          <View style={styles.user}>
            <FontAwesomeIcon
              icon={faUser}
              size={40}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.distance}>à 3 km</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.sport}>Football</Text>
            <Text style={styles.date}>Lundi 23 Février à 18h</Text>
          </View>
        </View>
        {props.bookmarkOption && <Bookmark/>}
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.bottomCard}>
        <View style={styles.participants}>
          <Text style={styles.participantsText}>Participants : </Text>
          <FontAwesomeIcon
            style={styles.participantsLogo}
            icon={faCircle}
            size={20}
          />
          <FontAwesomeIcon
            style={styles.participantsLogo}
            icon={faCircle}
            size={20}
          />
          <Text>+3</Text>
        </View>
        <View style={styles.infoIcon}>
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
        </View>
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
    width: 400,
    height: 180,
    marginTop: 10,
    marginLeft: 20,
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
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
  },
  distance: {
    fontSize: 13,
  },
  title: {
    marginLeft: 15,
  },
  sport: {
    fontSize: 20,
  },
  date: {
    fontSize: 13,
  },
  description: {
    marginLeft: 10,
  },
  bottomCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  participants: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  participantsText: {
    fontSize: 13,
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
