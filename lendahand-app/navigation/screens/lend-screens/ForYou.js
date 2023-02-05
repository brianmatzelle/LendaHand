import React from 'react';
import { View, ScrollView, scrollTo } from 'react-native';
import { styles } from './Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from './components/Event';
import { eventsDict } from '../Lend';

const ROW_HEIGHT = 467;

export function scrollToEvent(index) {
    this._scrollView.scrollTo({y:index * ROW_HEIGHT});
}

export default function ForYou({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView ref={view => this._scrollView = view}> 
                { eventsDict.map((eventObj, index) => (
                    <View style={styles.event} key={index}>
                        <Event event={eventObj} nav={navigation} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}