import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackParamList, TabParamList } from "./models/Navigation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Scheduled" component={Scheduled} />
            <Tab.Screen name="Bookmarked" component={Bookmarked} />
            <Tab.Screen name="Profil" component={Profil} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FirstPage" component={FirstPage} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUpInscription" component={SignUpInscription} />
                <Stack.Screen name="SignUpProfil" component={SignUpProfil} />
                <Stack.Screen name="SignUpSports" component={SignUpSports} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
