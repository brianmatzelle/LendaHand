import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Avatar, Text, Button, Card } from 'react-native-paper';
import { ThemedButton } from 'react-native-really-awesome-button';
import AwesomeButton from "react-native-really-awesome-button";
import { TrashIcon } from "@primer/octicons-react";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const buttonWidth = windowWidth / 3;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function convertDate(date_str) {
    const temp_date = date_str.split("-");
    return temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0];
}

function noThanks() {

}

function illHelp() {

}

export default function Event({ event }) {
    
    return (
        <Card
        mode='contained'
        >
            <Card.Title title={event.host} subtitle={convertDate(event.date)} left={LeftContent} />
            <Card.Content>
                <Text variant="titleLarge">{event.name}</Text>
                <Text variant="bodyMedium">{event.description}</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <ThemedButton
                    name="rick"
                    type="secondary"
                    onPress={noThanks}
                >
                No Thanks.
                </ThemedButton>

                <ThemedButton
                name="rick"
                type="primary"
                onPress={illHelp}
                style={styles.button}
                >
                I'll help!
                </ThemedButton>
            </Card.Actions>
        </Card>
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
    card: {

    },
    button: {
        margin: 10,
    },
    buttonText: {
        color: 'white',
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
