import React from 'react';
import { styles, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../styles/Styles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PostOptions from './post-screens/PostOptions';
import PostButton from './post-screens/PostButton';
import { HeaderBackButton } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

export default function Post() {
    return (
        <NavigationContainer
        independent={true}
        >
            <Stack.Navigator
                screenOptions={{ 
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerStyle: {
                        backgroundColor: '#ededed',
                        headerShadowVisible: false,
                        borderBottomWidth: 0,
                    },
                }}
            >
                <Stack.Screen options={{ headerShown: false }} name="PostButton" component={PostButton} />
                <Stack.Screen options={{ headerTitle: "Options"}} name="PostOptions" component={PostOptions} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}