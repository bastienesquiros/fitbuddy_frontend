import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default function Profil() {


    return (
        <View style={styles.container}>
            <Text>Profil Screen</Text>
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

