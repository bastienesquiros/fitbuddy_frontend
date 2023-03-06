import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EventState, localisationEvent } from '../reducers/event';

export default function AddressInput() {
  const dispatch = useDispatch();

  // const eventLoc = useSelector(
  //   (state: { event: EventState }) => state.event.value
  // );

  const [city, setCity] = useState<any>('');
  const [listCities, setListCities] = useState<any[]>([]);
  const [listCitiesResponse, setListCitiesResponse] = useState<any[]>([]);

  // At each change of the input we change the useState city
  const handleChange = (item: any) => {
    setCity(item);
  };

  // The city is retrieved by clicking on the drop-down list
  const handleSelect = (item: any) => {
    if (item) {
      // We filter the selected city with our query data
      let res = listCitiesResponse.filter(
        (e: any) => e.properties.label === item.title
      );
      let coord = res[0].geometry.coordinates;

      dispatch(
        localisationEvent({
          coord: coord,
        })
      ); //3.837357 43.589376
    }
    // console.log(eventLoc);
  };

  useEffect(() => {
    (async () => {
      // Classic fetch with async await
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${city}}`
      );
      const data = await response.json();

      // We check if we have data
      if (data.features?.length > 1) {
        // We map on data
        // setListCities : our array that will be used to display the cities in the AutocompleteDropdown component
        // setListCitiesResponse : our table with the data of the response of the request
        return data.features.forEach((e: any) => {
          setListCities([
            ...listCities,
            { id: e.properties.id, title: e.properties.label },
          ]);
          setListCitiesResponse([...listCitiesResponse, e]);
        });
      }
    })();

    // We empty the states at each re-render, in order to hide the previous search
    return () => {
      setListCities([]);
      setListCitiesResponse([]);
    };
    // Each time the input changes via the useState city, a new request is made
  }, [city]);

  return (
    <AutocompleteDropdown
      clearOnFocus={true}
      closeOnBlur={true}
      closeOnSubmit={true}
      onChangeText={handleChange}
      onSelectItem={handleSelect}
      dataSet={listCities}
      inputContainerStyle={{
        backgroundColor: 'white',
        borderRadius: 10,
        width: '70%',
        borderWidth: 1,
      }}
      textInputProps={{
        placeholder: 'Search city',
        autoCorrect: false,
        autoCapitalize: 'none',
      }}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
  },
  input: {
    backgroundColor: 'red',
    borderWidth: 1,
    height: 30,
    width: '90%',
  },
  container: {
    height: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  name: {
    color: 'white',
  },
  lat: {
    color: 'white',
  },
  lon: {
    color: 'white',
  },
});
