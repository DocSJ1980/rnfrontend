import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { TextInput, View, Text, Linking, Platform } from 'react-native'


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledTextInputLabel,
    StyledTextInput,
    Colors,
    StyledButton,
    ButtonText,
    Line,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    SmallButtonText,
    StyledButtonSmall
} from "./../components/styles.js"

import { Formik } from "formik";
import { Octicons } from '@expo/vector-icons'
const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;
const dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
        phoneNumber = 'tel:${1234567890}';
    }
    else {
        phoneNumber = 'telprompt:${1234567890}';
    }

    Linking.openURL(phoneNumber);
};

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require("./../assets/img/img1.png")} />
                <PageTitle>District Health Authority Rawalpindi</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email Address" icon="mail"
                                placeholder="address@example.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password" icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>Don't have an account?</ExtraText>
                                <StyledButtonSmall onPress={dialCall}>
                                    <SmallButtonText>Call Control Room</SmallButtonText>
                                </StyledButtonSmall>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
                <SubTitle>Powered by Epidemics Prevention & Control Cell</SubTitle>
            </InnerContainer>
        </StyledContainer>
    )
}

const MyTextInput = ({ label, icon, hidePassword, setHidePassword, isPassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledTextInputLabel>{label}</StyledTextInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                >
                    <Octicons name={hidePassword ? 'eye-closed' : 'eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login