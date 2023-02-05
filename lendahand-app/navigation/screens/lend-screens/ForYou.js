import React from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './Styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './components/Feed';
import EventInfo from './components/EventInfo';

export default function ForYou() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer
        independent={true}
        >
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Feed" component={Feed} />
                <Stack.Screen name="Event Info" component={EventInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}