import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from './components/Event';
import { eventsDict } from '../Lend';

const ROW_HEIGHT = 400;

export function scrollToEvent(index) {
    this._scrollView.scrollTo({y:index * ROW_HEIGHT});
}

export default function ForYou({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView> 
                { eventsDict.map(eventObj => (
                    <View style={styles.event} key={eventObj.x_loc}>
                        <Event event={eventObj} nav={navigation} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}