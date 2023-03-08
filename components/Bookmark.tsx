import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Bookmark(props: any) {
  const [bookmarkClick, setBookmarkClick] = useState(false);

  let markStyle = {};
  if (bookmarkClick) {
    markStyle = { color: 'red' };
  }

  const handleClick = () => {
    setBookmarkClick(!bookmarkClick);
    // fetch post id en params   > "update" mybookmarks
  };

  return (
    <View>
      {/* <Text>{props.cardId}</Text> */}
      <TouchableOpacity onPress={() => handleClick()}>
        <FontAwesomeIcon
          size={23}
          icon={faBookmark}
          style={markStyle}
        />
      </TouchableOpacity>
    </View>
  );
}
