import React from 'react'
import { Colors } from '../components/styles.js';
const { primary, tertiary } = Colors;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'transparent'
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                initialRouteName: "Login",
            }}
        >
            <Stack.Screen name='Welcome' options={{ headerTintColor: primary }} component={Welcome} />
        </Stack.Navigator>
    )
}

export default AppStack