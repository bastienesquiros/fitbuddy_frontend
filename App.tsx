import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackParamList, TabParamList } from "./models/Navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFonts } from 'expo-font' // Import for using custom fonts with expo
import * as SplashScreen from 'expo-splash-screen' // Import for using splash screen (mandatory for custom fonts)

import { Text } from "react-native";

import Logo from "./components/Logo";
import FirstPage from "./screens/FirstPage";
import Home from "./screens/Home";
import Scheduled from "./screens/Scheduled";
import Bookmarked from "./screens/Bookmarked";
import Profil from "./screens/Profil";
import SignIn from "./screens/SignIn";
import SignUpInscription from "./screens/SignUpInscription";
import SignUpProfil from "./screens/SignUpProfil";
import SignUpSports from "./screens/SignUpSports";

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();


const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: string = "";

                    if (route.name === "Home") {
                        iconName = "home";
                    } else if (route.name === "Bookmarked") {
                        iconName = "bookmark";
                    }
                    if (route.name === "Scheduled") {
                        iconName = "calendar";
                    } else if (route.name === "Profil") {
                        iconName = "user";
                    }

                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#F1600D",
                tabBarInactiveTintColor: "#1A256A",
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: true, headerTitle: (props) => <Logo {...props} /> }} />
            <Tab.Screen name="Scheduled" component={Scheduled} options={{
                headerShown: true, headerTitle: (props) => <Logo {...props} />,
                headerStyle: {
                    backgroundColor: '#fff',
                    elevation: 0, // remove shadow on Android
                    shadowOpacity: 0, // remove shadow on iOS
                },
                headerTitleAlign: 'center',
                headerRight: (props) => <Logo {...props} /> // TO REPLACE BY MESSAGE COMPONENT
            }} />
            <Tab.Screen name="Bookmarked" component={Bookmarked} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    );
};

export default function App() {
    const [fontsLoaded] = useFonts({
        // Defining custom fonts
        "Mukta-Regular": require("./assets/fonts/Mukta-Regular.ttf"),
        "Mukta-Bold": require("./assets/fonts/Mukta-Bold.ttf"),
        "Mukta-ExtraBold": require("./assets/fonts/Mukta-ExtraBold.ttf"),
        "Mukta-ExtraLight": require("./assets/fonts/Mukta-ExtraLight.ttf"),
        "Mukta-Light": require("./assets/fonts/Mukta-Light.ttf"),
        "Mukta-Medium": require("./assets/fonts/Mukta-Medium.ttf"),
        "Mukta-SemiBold": require("./assets/fonts/Mukta-SemiBold.ttf"),
        "NATS-Regular": require("./assets/fonts/NATS-Regular.ttf"),
    })


    // Async function to load fonts
    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, [])

    // If fonts are not loaded, use default fonts
    if (!fontsLoaded) {
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FirstPage" component={FirstPage} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUpInscription" component={SignUpInscription} options={{
                    headerShown: true, headerTitle: (props) => <Logo {...props} />,
                    headerRight: () => (<Text>test</Text>)
                }} />
                <Stack.Screen name="SignUpProfil" component={SignUpProfil} />
                <Stack.Screen name="SignUpSports" component={SignUpSports} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
