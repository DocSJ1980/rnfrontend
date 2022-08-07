import React from "react"
import { StatusBar } from 'expo-status-bar';


import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    Colors,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from "./../components/styles.js"

const Welcome = () => {
    return (
        <>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require("./../assets/img/img2.jpg")} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome</PageTitle>
                    <SubTitle welcome={true}>Muhammad Abdullah</SubTitle>
                    <SubTitle welcome={true}>0315-1122334</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require("./../assets/img/img1.png")} />
                        <Line />
                        <StyledButton onPress={() => { }}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
                <SubTitle>Powered by Epidemics Prevention & Control Cell</SubTitle>
            </InnerContainer>
        </>
    )
}

export default Welcome