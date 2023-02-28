import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

type SignInProps = {
    navigation: NavigationProp<ParamListBase>
}

export default function SignIn({ navigation }: SignInProps) {


    // Created an inputStates array to store the state of each input tag. Added a handleFocus function that takes an index as an argument and updates the input tags' state accordingly. This function uses the fill method to set all values to false except for the current index, which is set to true.
    // Modified how we apply the onFocus effect to each input tag by using the current index to determine which tag is active.
    

    const [inputStates, setInputStates] = useState<Array<boolean>>([false, false, false, false]);

    const handleFocus = (index: number) => {
        const newInputStates = [...inputStates];
        newInputStates.fill(false);
        newInputStates[index] = true;
        setInputStates(newInputStates);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Connexion</Text>
            <View>
                <TextInput 
                    style={[styles.input, inputStates[0] && styles.inputFocus]}
                    onFocus={() => handleFocus(0)}
                    placeholder='Adresse mail' 
                />
                <TextInput 
                    style={[styles.input, inputStates[1] && styles.inputFocus]}
                    onFocus={() => handleFocus(1)}
                    placeholder='Mot de passe'
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')} style={styles.button}>
                <Text style={styles.buttontext}> Connexion </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: 250,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        margin: 10,
        padding: 5,
    },
    inputFocus: {
        borderColor: '#F1600D',
    },
    button:{
        width: 150,
        height: 45,
        backgroundColor: "#1A256A",
        border: 1,
        borderRadius: 6,
        transition: '1s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
})
