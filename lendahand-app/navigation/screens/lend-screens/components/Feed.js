import React from 'react';
import { View } from 'react-native';
import Event from './Event';
import { styles } from '../Styles';

export default function Feed() {
    const eventsData = require('../../../../data/sample-events.json');
    const eventsDict = eventsData.features;
    return (
        <View style={styles.container}>
            { eventsDict.map(obj => (
            <View
            key={obj.x_loc}>
                <Event 
                key={obj.x_loc}
                event={obj}
                />
            </View>

        ))}
        </View>
        // <Event event={eventsDict[0]}/>
    );
}