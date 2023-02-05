import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './Styles';

const eventDict = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' }, 
]

export default function ForYou() {
    return (
        <ScrollView>
            { eventDict.map(obj => {
                <View
                    key={obj.key}
                >

                </View>
            })}
        </ScrollView>
    );
}