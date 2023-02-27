import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

type SignInProps = {
    navigation: NavigationProp<ParamListBase>;
};

export default function SignIn({ navigation }: SignInProps) {
    return (
        <View style={styles.container}>
            <Text>SignIn</Text>
            <TouchableOpacity onPress={() => navigation.navigate("TabNavigator")}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});
