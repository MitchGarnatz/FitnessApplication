import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker';
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { useNavigation } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';
import {
    Colors,
    StyledContainer,
    InnerContainer,
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

const { brand, darkLight } = Colors;

const Signup = () => {

    const navigation = useNavigation();

    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    // Actual Date of Birth
    const [dob, setDob] = useState();

    const handleLoginPress = () => {
        navigation.navigate('login'); // Navigate to the 'welcome' screen
    };

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

    const handleSignUp = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://rocky-mesa-32873-0728902da64a.herokuapp.com/user/signup';

        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data
            const {message, status, data} = result;

            if (status !== 'SUCCESS') {
                handleMessage(message, status);
                setSubmitting(false);
            } else {
                persistLogin({...data}, message, status)
            }
            setSubmitting(false);
        })
        .catch(error => {
            console.log(error);
            setSubmitting(false);
            handleMessage("An error occurred. Check your network and try again");
        })
    }

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    const persistLogin = (credentials, message, status) => {
        AsyncStorage.setItem('fitnessAppCredentials', JSON.stringify(credentials))
        .then(() => {
            handleMessage(message, status);
            setStoredCredentials(credentials);
        }) 
        .catch((error) => {
            console.lgog(error);
            handleMessage('Persist login failed');
        })
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageTitle>Fitness Through AI</PageTitle>
                    <SubTitle>Account Signup</SubTitle>

                    <Formik
                        initialValues={{
                            name: '', 
                            email: '', 
                            password: '',
                            confirmPassword: '',
                            dateOfBirth: ''
                        }} 
                        onSubmit={(values, {setSubmitting}) => {
                            values = {...values, dateOfBirth: dob};
                            if (
                                values.email == '' ||
                                values.password == '' ||
                                values.name == '' ||
                                values.dateOfBirth == '' ||
                                values.confirmPassword == ''
                            ) {
                                handleMessage('Please fill all the fields');
                                setSubmitting(false);
                            } else if (values.password !== values.confirmPassword) {
                                handleMessage('Passwords do not match');
                                setSubmitting(false);
                            }
                            else {
                                handleSignUp(values, setSubmitting);
                            }
                        }}   
                    >   
                        {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Full Name"
                                    icon="person"
                                    placeholder="First Last"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
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
                                <MsgBox type={messageType}>{message}</MsgBox>

                                {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Signup</ButtonText>
                                </StyledButton>}

                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator size="large" color={'white'} />
                                </StyledButton>}
                                <Line/>
                                <ExtraView>
                                    <ExtraText>Already have an account already? </ExtraText>
                                    <TextLink onPress={handleLoginPress}>
                                        <TextLinkContent>Login</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
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