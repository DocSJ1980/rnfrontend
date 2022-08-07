import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native'


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
    StyledButtonSmall,
    SmallButtonText
} from "./../components/styles.js"

import { Formik } from "formik";
import { Octicons } from '@expo/vector-icons'
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper.js";
const { darkLight, brand } = Colors;

const Login = ({ navigation }) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidingWrapper>
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
                            navigation.navigate("Welcome")
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
                                    <StyledButtonSmall onPress={() => { navigation.navigate('Signup') }}>
                                        <SmallButtonText>Signup</SmallButtonText>
                                    </StyledButtonSmall>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>
                    <SubTitle>Powered by Epidemics Prevention & Control Cell</SubTitle>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    )
}

const MyTextInput = ({ label, icon, hidePassword, setHidePassword, isPassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={23} color={brand} />
            </LeftIcon>
            <StyledTextInputLabel>{label}</StyledTextInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                >
                    <Octicons name={hidePassword ? 'eye-closed' : 'eye'} size={23} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login