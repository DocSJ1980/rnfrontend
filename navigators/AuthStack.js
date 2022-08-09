import React from 'react'
import { Colors } from '../components/styles.js';
const { primary, tertiary } = Colors;
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login.js'
import Signup from '../screens/Signup'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
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
                }
            }}
            initialRouteName='Login'
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack