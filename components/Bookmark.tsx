import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import signIn, { UserState } from '../reducers/user';
import {
  addBookmarks,
  BookmarkState,
  removeBookmark,
} from '../reducers/bookmarks';

export default function Bookmark(props: any) {
  const dispatch = useDispatch();

  const user = useSelector((state: { user: UserState }) => state.user.value);

  const userBookmarksId = useSelector(
    (state: { bookmarks: BookmarkState }) => state.bookmarks.value
  );
  const eventId = props.cardId;
  const isMatching = userBookmarksId.some((id) => eventId === id);

  let iconStyle = {};
  if (isMatching) {
    iconStyle = { color: 'red' };
  }
  const IP = '10.33.210.159';

  const handleClick = () => {
    if (isMatching) {
      fetch(`http://${IP}:3000/users/removebookmark`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: props.cardId,
          token: user.token,
        }),
      })
        .then((response) => response.json())
        .then((bookmarkDeleteData) => {
          const result = bookmarkDeleteData.result;
          if (result) {
            dispatch(removeBookmark(eventId));
          }
        });
    } else {
      fetch(`http://${IP}:3000/users/addbookmark`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: props.cardId,
          token: user.token,
        }),
      })
        .then((response) => response.json())
        .then((bookmarkAddData) => {
          const result = bookmarkAddData.result;
          if (result) {
            dispatch(addBookmarks(eventId));
          }
        });
    }
  };

  console.log('id des events bookmarkées par luser:', userBookmarksId);
  console.log('id de levent:', eventId);
  console.log('match?:', isMatching);

  return (
    <View>
      <TouchableOpacity onPress={() => handleClick()}>
        <FontAwesomeIcon
          size={23}
          icon={faBookmark}
          style={iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

// const [bookmarkClick, setBookmarkClick] = useState(false);

// // const [bookmarks, setBookmarks] = useState<[]>([]);

// const bookmarksCard = useSelector(
//   (state: { bookmarks: BookmarkState }) => state.bookmarks.value
// );

// console.log(bookmarksCard);
// const user = useSelector((state: { user: UserState }) => state.user.value);

// let markStyle = {};
// if (bookmarkClick) {
//   markStyle = { color: 'red' };
// }

// const handleClick = () => {
//   setBookmarkClick(!bookmarkClick);

//   if (props.cardId && !bookmarkClick) {
//     fetch(`http://${IP}:3000/users/addbookmark`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         id: props.cardId,
//         token: user.token,
//       }),
//     }).then((response) => response.json());
//   } else {
//     fetch(`http://${IP}:3000/users/removebookmark`, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         id: props.cardId,
//         token: user.token,
//       }),
//     }).then((response) => response.json());
//   }
// };
