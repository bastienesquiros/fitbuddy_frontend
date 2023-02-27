import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

type SignUpInscriptionProps = {
    navigation: NavigationProp<ParamListBase>
}

export default function SignUpInscription({ navigation }: SignUpInscriptionProps) {

    return (
        <View style={styles.container}>
            <Text>Sign Up Inscription</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpProfil')}>
                <Text>Go to Next Sign Up Page </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})





