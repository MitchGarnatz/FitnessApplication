import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { Formik } from 'formik';
import {
    Colors,
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from './components/styles';

import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';

const { brand, darkLight } = Colors;

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    // Actual Date of Birth
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        console.log(selectedDate.toDateString());
        console.log(date.toDateString())
        const currentDate = selectedDate || date;
        console.log(currentDate.toDateString());
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
        console.log(dob);
    }

    const showDatePicker = () => {
        setShow(true);
        console.log("showDatePicker function is triggered");
    }

    return (
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageTitle>Fitness Through AI</PageTitle>
                    <SubTitle>Account Signup</SubTitle>

                    <Formik
                        initialValues={{
                            fullName: '', 
                            email: '', 
                            dateOfBirth: new Date(), 
                            password: '',
                            confirmPassword: ''
                        }} 
                        onSubmit={(values) => {
                            console.log('Submitted values:', {
                                ...values,
                                dateOfBirth: dob
                            });

                            console.log(dob.toDateString());
                        }}   
                    >   
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Full Name"
                                    icon="person"
                                    placeholder="First Last"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                    isPassword={undefined} 
                                    hidePassword={undefined} 
                                    setHidePassword={undefined}
                                />

                                <MyTextInput            
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="example@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address" 
                                    isPassword={undefined} 
                                    hidePassword={undefined} 
                                    setHidePassword={undefined}
                                />
                                <TouchableOpacity onPress={showDatePicker}>
                                <MyTextInput
                                    label="Date of Birth"
                                    icon="calendar"
                                    placeholder="MM - DD - YYYY"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('dateOfBirth')}
                                    onBlur={handleBlur('dateOfBirth')}
                                    value={dob ? dob.toDateString() : ''} 
                                    isDate={true}
                                    editable={false}
                                    showDatePicker={showDatePicker}
                                />
                                </TouchableOpacity>
                                {show && (
                                    <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode='date'
                                    is24Hour={true}
                                    // display="default"
                                    onChange={onChange}
                                    />
                                )}

                                <MyTextInput
                                    label="Password"
                                    icon="lock"
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
                                    label="Confrim Password"
                                    icon="lock"
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
                                <Line/>
                                <ExtraView>
                                    <ExtraText>Already have an account already? </ExtraText>
                                    <TextLink>
                                        <TextLinkContent>Login</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>

            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />

            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;