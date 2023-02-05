import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from './components/Event';
import { eventsDict } from '../Lend';

export default function ForYou() {
    return (
        <View style={styles.container}>
            <ScrollView> 
                { eventsDict.map(eventObj => (
                    <View style={styles.event} key={eventObj.x_loc}>
                        <Event event={eventObj} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}