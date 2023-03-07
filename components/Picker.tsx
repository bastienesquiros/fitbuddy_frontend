// import React, { useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';

// const data = [
//   { label: 'Débutant', value: 'Débutant' },
//   { label: 'Intermédiaire', value: 'Intermédiaire' },
//   { label: 'Expérimenté', value: 'Expérimenté' },
// ];

// const DropdownComponent = () => {
//   const [levels, setLevels] = useState<string | null>(null);
//   const [isFocus, setIsFocus] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: '#F1600D' }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         data={data}
//         maxHeight={300}
//         labelField="label"
//         valueField="value"
//         dropdownPosition="top"
//         placeholder={!isFocus ? 'Votre Niveau' : '...'}
//         value={levels}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={(item) => {
//           setLevels(item.value);
//           setIsFocus(false);
//         }}
//       />
//     </View>
//   );
// };

// export default DropdownComponent;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     justifyContent: 'center',
//     alignContent: 'center',
//     display: 'flex',
//     width: 170,
//     height: 50,
//   },
//   dropdown: {
//     height: 30,
//     borderColor: 'gray',
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//   },
//   label: {
//     position: 'absolute',
//     backgroundColor: 'white',
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
// });
