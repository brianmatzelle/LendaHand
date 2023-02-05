import React from 'react';
import { View, Text } from 'react-native'
import { ThemedButton } from 'react-native-really-awesome-button'
import { styles, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../styles/Styles';
import { useNavigation } from '@react-navigation/core'

export default function PostButton(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ThemedButton
                name="bruce"
                type="secondary"
                onPress={() => {
                    navigation.push("PostOptions")
                }}
                style={styles.button}
                width={WINDOW_WIDTH/2}
                borderColor="#F1E0AC"
                backgroundColor="#495371"
                backgroundDarker='#98B4AA'
                backgroundShadow='#b8ccc5'
            >
                <Text style={styles.buttonText1}>NEW POST</Text>
            </ThemedButton>
            <ThemedButton
                name="bruce"
                type="secondary"
                onPress={() => {
                    navigation.push("PostOptions")
                }}
                style={styles.button}
                width={WINDOW_WIDTH/2}
                borderColor="#F1E0AC"
                backgroundColor="#74959A"
                backgroundDarker='#98B4AA'
                backgroundShadow='#b8ccc5'
            >
                <Text style={styles.buttonText2}>NEW POST</Text>
            </ThemedButton>
            <ThemedButton
                name="bruce"
                type="secondary"
                onPress={() => {
                    navigation.push("PostOptions")
                }}
                style={styles.button}
                width={WINDOW_WIDTH/2}
                borderColor="#F1E0AC"
                backgroundColor="#98B4AA"
                backgroundDarker='#98B4AA'
                backgroundShadow='#b8ccc5'
            >
                <Text style={styles.buttonText3}>NEW POST</Text>
            </ThemedButton>
            <ThemedButton
                name="bruce"
                type="secondary"
                onPress={() => {
                    navigation.push("PostOptions")
                }}
                style={styles.button}
                width={WINDOW_WIDTH/2}
                borderColor="#F1E0AC"
                backgroundColor="#F1E0AC"
                backgroundDarker='#98B4AA'
                backgroundShadow='#b8ccc5'
            >
                <Text style={styles.buttonText4}>NEW POST</Text>
            </ThemedButton>
            
        </View>
    );
}