import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

type bookmarkProps = {
  bookmarkOption: boolean;
};

export default function CardsContainer(props: bookmarkProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Pour moi</Text>
        <TouchableOpacity>
          <Text style={styles.buttonSeeAll}>Tout voir</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scroll}
       
        horizontal={true}
      
        showsHorizontalScrollIndicator={false}
      >
        <Card bookmarkOption={props.bookmarkOption} />
        <Card bookmarkOption={props.bookmarkOption} />
        <Card bookmarkOption={props.bookmarkOption} />
        <Card bookmarkOption={props.bookmarkOption} />
        <Card bookmarkOption={props.bookmarkOption} />
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
