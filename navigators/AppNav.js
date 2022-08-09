import React, { useContext } from 'react'
import { Text, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


import { AuthContext } from "../context/AuthContext.js";
import AuthStack from './AuthStack';
import AppStack from './AppStack.js';
import { InnerContainer, StyledContainer, PageLogo, PageTitle, SubTitle, MsgBox } from '../components/styles';
import { StatusBar } from 'expo-status-bar';


const AppNav = () => {
    const { userToken, isLoading } = useContext(AuthContext)

    if (isLoading) {
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require("./../assets/img/img1.png")} />
                <PageTitle>District Health Authority Rawalpindi</PageTitle>
                <SubTitle>Loading</SubTitle>
                <MsgBox>{userToken}</MsgBox>
                <ActivityIndicator />
                <SubTitle>Powered by Epidemics Prevention & Control Cell</SubTitle>
            </InnerContainer>
        </StyledContainer>
    }
    return (
        <NavigationContainer>
            {/* <Text>{userToken}</Text> */}
            {userToken !== null ? <AppStack /> : < AuthStack />}
        </NavigationContainer>
    );
}

export default AppNav