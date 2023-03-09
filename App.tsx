import React, { useEffect } from 'react';
import { useFonts } from 'expo-font'; // Import for using custom fonts with expo
import * as SplashScreen from 'expo-splash-screen'; // Import for using splash screen (mandatory for custom fonts)

// redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';
import inputEvent from './reducers/inputCoords';
import bookmarks from './reducers/bookmarks';

import Navigation from './components/Navigation';

const store = configureStore({
  reducer: { user, inputEvent, bookmarks },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    // Defining custom fonts
    'Mukta-Regular': require('./assets/fonts/Mukta-Regular.ttf'),
    'Mukta-Bold': require('./assets/fonts/Mukta-Bold.ttf'),
    'Mukta-ExtraBold': require('./assets/fonts/Mukta-ExtraBold.ttf'),
    'Mukta-ExtraLight': require('./assets/fonts/Mukta-ExtraLight.ttf'),
    'Mukta-Light': require('./assets/fonts/Mukta-Light.ttf'),
    'Mukta-Medium': require('./assets/fonts/Mukta-Medium.ttf'),
    'Mukta-SemiBold': require('./assets/fonts/Mukta-SemiBold.ttf'),
    'NATS-Regular': require('./assets/fonts/NATS-Regular.ttf'),
  });

  // Async function to load fonts
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  // If fonts are not loaded, use default fonts
  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
