import React from 'react'
import { Colors } from './../components/styles.js';
const { primary, tertiary } = Colors;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../screens/Login.js'
import Signup from './../screens/Signup'
import Welcome from './../screens/Welcome'

const Stack = createNativeStackNavigator()

const RootStack = () => {
    return (
        <NavigationContainer>
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
                <Stack.Screen name='Welcome' options={{ headerTintColor: primary }} component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack