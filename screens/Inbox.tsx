import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Inbox() {
    return (
        <View style={styles.container}>
            <Text>Inbox Screen</Text>
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

