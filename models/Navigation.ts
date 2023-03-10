import { NavigationProp, ParamListBase } from '@react-navigation/native';

export type StackParamList = {
  FirstPage: undefined;
  SignIn: undefined;
  SignUpInscription: undefined;
  SignUpProfil: undefined;
  SignUpSports: undefined;
  TabNavigator: undefined;
  Inbox: undefined;
  Message: undefined;
  Settings: undefined;
  SeeAll: undefined;
  CardsContainer: undefined;
  FullCard: undefined;
  AddEvent: undefined;
  Profil: undefined;
};

export type TabParamList = {
  TabNavigator: undefined;
  Home: undefined;
  Bookmarked: undefined;
  Scheduled: undefined;
  Profil: undefined;
};

export type Navigation = {
  navigate: any;
  navigation: NavigationProp<ParamListBase>;
};
