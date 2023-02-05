import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './Styles';
import Event from './components/Event';

export default function ForYou() {
    const eventsData = require('../../../data/sample-events.json');
    const eventsDict = eventsData.features;

    return (
        <ScrollView>
            { eventsDict.map(event => {
                <View
                    key={event.key}
                >
                    
                </View>
            })}
        </ScrollView>
    );
}