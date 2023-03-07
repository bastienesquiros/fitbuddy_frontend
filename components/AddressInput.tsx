import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { localisationEvent } from '../reducers/inputCoords';

export default function AddressInput() {
  const dispatch = useDispatch();

  const [city, setCity] = useState<string>('');
  const [listCities, setListCities] = useState<any[]>([]);
  const [listCitiesResponse, setListCitiesResponse] = useState<any[]>([]);

  // At each change of the input we change the useState city
  const handleChange = (item: string) => {
    setCity(item);
  };

  // The city is retrieved by clicking on the drop-down list
  const handleSelect = (item: { title: string | null }) => {
    if (item) {
      // We filter the selected city with our query data
      let res: any[] = listCitiesResponse.filter(
        (e: any) => e.properties.label === item.title
      );
      let coords: number[] = res[0].geometry.coordinates;

      dispatch(
        localisationEvent({
          coords: coords,
        })
      );
    }
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
          setListCities((state) => [
            ...state,
            { id: e.properties.id, title: e.properties.label },
          ]);
          setListCitiesResponse((state) => [...state, e]);
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
