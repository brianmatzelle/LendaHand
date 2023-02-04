import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from './screens/Login';
import Lend from './screens/Lend';
import Post from './screens/Post';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();
const lendTabText = "Lend";
const postTabText = "Post";
const profileTabText = "Profile";

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={lendTabText}
            screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#3e5ea8',
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: [{
                display: "flex"
            },
            null
            ],
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
    
                if (rn === lendTabText) {
                    iconName = focused ? 'hand-left' : 'hand-left-outline';
                } 
                else if (rn === postTabText) {
                    iconName = focused ? 'megaphone' : 'megaphone-outline';
                } 
                else if (rn === profileTabText) {
                    iconName = focused ? 'person' : 'person-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            >
            <Tab.Screen name={lendTabText} component={Lend} />
            <Tab.Screen name={postTabText} component={Post} />
            <Tab.Screen name={profileTabText} component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}