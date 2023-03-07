import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackParamList, TabParamList } from '../models/Navigation';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SettingsIcon from '../components/Settings';
import Message from '../components/Message';
import Logo from '../components/Logo';
import Settings from '../screens/Settings';
import FirstPage from '../screens/FirstPage';
import Home from '../screens/Home';
import Scheduled from '../screens/Scheduled';
import Bookmarked from '../screens/Bookmarked';
import Profil from '../screens/Profil';
import SignIn from '../screens/SignIn';
import SignUpInscription from '../screens/SignUpInscription';
import SignUpProfil from '../screens/SignUpProfil';
import SignUpSports from '../screens/SignUpSports';
import Inbox from '../screens/Inbox';
import SeeAll from '../screens/SeeAll';
import AddEvent from '../screens/AddEvent';
import FullCard from '../screens/FullCard';

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const headerWithLogoOnly = {
  // Re-usable constant for the header with logo & back arrow
  headerShown: true,
  headerTitle: (props: any) => <Logo {...props} />,
  headerStyle: {
    backgroundColor: '#F5FCFF',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerShadowVisible: false,
};

const headerWithBackArrowOnly = {
  // Re-usable constant to only show the back arrow
  headerShown: true,
  headerTitle: '',
  headerStyle: {
    backgroundColor: '#F5FCFF',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerShadowVisible: false,
};

const TabNavigator = () => {
  const navigation = useNavigation();

  const headerWithMessage = {
    // Re-usable constant for the header with message icon only
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      backgroundColor: '#F5FCFF',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerRight: (props: any) => (
      <Message
        {...props}
        navigation={navigation}
      />
    ),
  };

  const headerWithSettings = {
    // Re-usable constant for the header with message icon only
    headerShown: true,
    headerTitle: '',
    headerStyle: {
      backgroundColor: '#F5FCFF',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerRight: (props: any) => (
      <SettingsIcon
        {...props}
        navigation={navigation}
      />
    ),
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Bookmarked') {
            iconName = 'bookmark';
          }
          if (route.name === 'Scheduled') {
            iconName = 'calendar';
          } else if (route.name === 'Profil') {
            iconName = 'user';
          }

          return (
            <FontAwesome
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: '#F1600D',
        tabBarInactiveTintColor: '#1A256A',
        headerShown: false,
        headerTitleAlign: 'center',
        headerRightContainerStyle: {
          marginRight: 20,
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={headerWithMessage}
      />
      <Tab.Screen
        name="Scheduled"
        component={Scheduled}
        options={headerWithMessage}
      />
      <Tab.Screen
        name="Bookmarked"
        component={Bookmarked}
        options={headerWithMessage}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={headerWithSettings}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, headerTitleAlign: 'center' }}
      >
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={headerWithLogoOnly}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={headerWithLogoOnly}
        />
        <Stack.Screen
          name="SignUpInscription"
          component={SignUpInscription}
          options={headerWithLogoOnly}
        />
        <Stack.Screen
          name="SignUpProfil"
          component={SignUpProfil}
        />
        <Stack.Screen
          name="SignUpSports"
          component={SignUpSports}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
        />
        <Stack.Screen
          name="Inbox"
          component={Inbox}
          options={headerWithBackArrowOnly}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={headerWithBackArrowOnly}
        />
        <Stack.Screen
          name="SeeAll"
          component={SeeAll}
          options={headerWithBackArrowOnly}
        />
        <Stack.Screen
          name="AddEvent"
          component={AddEvent}
          options={headerWithBackArrowOnly}
        />
        <Stack.Screen
          name="FullCard"
          component={FullCard}
          options={headerWithBackArrowOnly}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
