import React from "react"
import { StatusBar } from 'expo-status-bar';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle
} from "./../components/styles.js"

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require("./../assets/img/img1.png")} />
                <PageTitle>District Health Authority Rawalpindi</PageTitle>
                <SubTitle>Powered by Epidemics Prevention & Control Cell</SubTitle>
            </InnerContainer>
        </StyledContainer>
    )
}

export default Login