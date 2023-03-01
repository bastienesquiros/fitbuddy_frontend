import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Bookmark() {

  const [bookmarkClick, setBookmarkClick] = useState(false)
  let markStyle={}
  if(bookmarkClick){
    markStyle = { color: 'red' };
  }
  const handleClick = () => {
    setBookmarkClick(!bookmarkClick)
  };
  return (
    <View>
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
