import React from 'react';
import { styles } from './lend-screens/Styles';
import { View, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYou from './lend-screens/ForYou';
import Map from './lend-screens/Map';

const Tab = createMaterialTopTabNavigator();

export default function Lend() {
    return (
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 16 },
            tabBarStyle: { backgroundColor: 'white' },
        }}
    >
      <Tab.Screen name="For You" component={ForYou} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
    );
}