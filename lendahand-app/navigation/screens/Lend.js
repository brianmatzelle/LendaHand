import React from 'react';
import { styles } from './lend-screens/Styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ForYou from './lend-screens/ForYou';
import Map from './lend-screens/Map';
import { Dimensions } from 'react-native';

export default function Lend() {
    const Tab = createMaterialTopTabNavigator();
    const windowHeightInt = parseInt(Dimensions.get('window').height);
    const marginHeight = windowHeightInt/18;

    return (
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 16 },
            tabBarStyle: {
                marginTop: marginHeight,
                backgroundColor: '#ededed'
            },
        }}
    >
      <Tab.Screen name="For You" component={ForYou} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
    );
}