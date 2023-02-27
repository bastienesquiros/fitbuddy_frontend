import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'


type SignUpProfileProps = {
    navigation: NavigationProp<ParamListBase>
}

export default function SignUpProfile({ navigation }: SignUpProfileProps) {
    return (
        <View style={styles.container}>
            <Text>Sign Up Profil</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("SignUpSports")}
            >
                <Text>Go to Sign Up Sports</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
});
