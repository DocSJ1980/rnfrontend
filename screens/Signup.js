import React, { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { TextInput, View, Text, Linking, Platform, TouchableOpacity } from 'react-native'


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

import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from "formik";
import { Octicons } from '@expo/vector-icons'
const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper.js";


const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    // Actual value to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    };
    const showDatePickerNew = () => {
        console.log(show)
        setShow(true)
    };

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageTitle>District Health Authority Rawalpindi</PageTitle>
                    <SubTitle>Account Login</SubTitle>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={date}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            style={{
                                backgroundColor: brand,
                            }}
                        />
                    )}
                    <Formik
                        initialValues={{ fullName: '', dateOfBirth: '', email: '', password: '', confirmPassword: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Full Name" icon="person"
                                    placeholder="Muhammad Abdullah"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                />
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
                                    label="Date of Birth"
                                    placeholder="YYYY - MM - DD"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('dateOfBirth')}
                                    onBlur={handleBlur('dateOfBirth')}
                                    value={dob ? dob.toDateString() : ''}
                                    icon="calendar"
                                    editable={false}
                                    isDate={true}
                                    showDatePickerNew={showDatePickerNew}
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
                                <MyTextInput
                                    label="Confirm Password" icon="lock"
                                    placeholder="* * * * * * * *"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Signup</ButtonText>
                                </StyledButton>
                                <Line />
                                <ExtraView>
                                    <ExtraText>Already have an account?</ExtraText>
                                    <StyledButtonSmall>
                                        <SmallButtonText>Login</SmallButtonText>
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

const MyTextInput = ({ label, icon, hidePassword, showDatePickerNew, setHidePassword, isDate, isPassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={23} color={brand} />
            </LeftIcon>

            <StyledTextInputLabel>{label}</StyledTextInputLabel>

            {
                isDate && (
                    <TouchableOpacity onPress={showDatePickerNew}>
                        <StyledTextInput {...props} />
                    </TouchableOpacity>
                )}
            {!isDate &&
                <StyledTextInput {...props} />
            }

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

export default Signup