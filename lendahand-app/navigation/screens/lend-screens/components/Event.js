import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button'
import { useNavigation } from '@react-navigation/core'

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const buttonWidth = windowWidth / 3;

export default function Event({ event }) {
    const navigation = useNavigation();
    return (
        <View style={styles.event}>
            <AwesomeButton
                onPress={navigation.push("Event Info")}
                type="primary"
                style={styles.button}
                width={buttonWidth}
            />
            <Text style={styles.buttonText}>{event.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    event: {
        flex: 1,
        width: windowWidth,
        height: 30,
    },
    title: {
        fontWeight: 'bold',
    },
    button: {
        margin: 10,
    },
    buttonText: {
        color: '#3e5ea8',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonOutlineText: {
        color: 'blue',
        fontWeight: '700',
        fontSize: 16,
    }
});
