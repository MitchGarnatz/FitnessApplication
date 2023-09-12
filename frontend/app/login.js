// ios 231662590068-m8s5oepjh5p17vgl9p2ok70ko17alp4r.apps.googleusercontent.com
// android 231662590068-5af7eo4abents49fotsprqtu3rhiv5nt.apps.googleusercontent.com
// web 231662590068-56dcrnmp355a1pev0oetuqqg4pih31mg.apps.googleusercontent.com

import React, { useState, useEffect, useContext } from 'react';
import { View, ActivityIndicator, Link, Text } from 'react-native';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { useNavigation } from 'expo-router';
import axios from 'axios';

import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';

WebBrowser.maybeCompleteAuthSession();

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

const { brand, darkLight } = Colors;


const Login = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    
    const navigation = useNavigation();

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "231662590068-5af7eo4abents49fotsprqtu3rhiv5nt.apps.googleusercontent.com",
        iosClientId: "231662590068-m8s5oepjh5p17vgl9p2ok70ko17alp4r.apps.googleusercontent.com",
        webClientId: "231662590068-56dcrnmp355a1pev0oetuqqg4pih31mg.apps.googleusercontent.com",
    });

    const clearMessage = () => {
        setMessage(null);
        setMessageType(null);
      };

    useEffect(() => {
        clearMessage();
    },[]);

    async function handleSignInWithGoogle() {
        const user = await AsyncStorage.getItem('fitnessAppCredentials');
        console.log("login.js");
        if (!user) {
            if (response?.type === "success") {
                await getUserInfo(response.authentication.accessToken);
            }
        } else {
            setUserInfo(JSON.parse(user));
            navigation.navigate('welcome');
        }
    };

    const getUserInfo = async (token) => {
        if (!token) return;
        try {
            const response = await fetch (
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const user = await response.json();
            await AsyncStorage.setItem('fitnessAppCredentials', JSON.stringify(user));
            setUserInfo(user);
            navigation.navigate('welcome');
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignUpPress = () => {
        navigation.navigate('signup'); // Navigate to the 'welcome' screen
    };

    const handleLogin = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://rocky-mesa-32873-0728902da64a.herokuapp.com/user/signin';

        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data
            const {message, status, data} = result;

            if (status !== 'SUCCESS') {
                handleMessage(message, status);
                setSubmitting(false);
            } else {
                persistLogin({...data[0]}, message, status)
                navigation.navigate('welcome'); // Navigate to the 'welcome' screen
            }
            setSubmitting(false);
        })
        .catch(error => {
            console.log(error);
            setSubmitting(false);
            handleMessage("An error occurred. Check your network and try again");
        })
    };

    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    };

    const persistLogin = (credentials, message, status) => {
        AsyncStorage.setItem('fitnessAppCredentials', JSON.stringify(credentials))
        .then(() => {
            // handleMessage(message, status);
            setStoredCredentials(credentials);
        }) 
        .catch((error) => {
            console.log(error);
            handleMessage('Persist login failed');
        })
    }

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./assets/logo.png')} />
                    <PageTitle>Fitness Through AI</PageTitle>
                    <SubTitle>Account Login</SubTitle>

                    <Formik
                        initialValues={{email: '', password: ''}} 
                        onSubmit={(values, {setSubmitting}) => {
                            if (values.email == '' || values.password == '') {
                                handleMessage('Please fill all the fields');
                                setSubmitting(false);
                            } else {
                                handleLogin(values, setSubmitting);
                            }
                        }}   
                    >   
                        {({handleChange, handleBlur, handleSubmit, values, isSubmitting}) => <StyledFormArea>
                                <MyTextInput
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="example@gmail.com"
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                    secureTextEntry={null}
                                    isPassword={false}
                                    hidePassword={null}
                                    setHidePassword={null}
                                />
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
                                <MsgBox type={messageType}>{message}</MsgBox>
                                {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>}

                                {isSubmitting && <StyledButton disabled={true}>
                                    <ActivityIndicator size="large" color={'white'} />
                                </StyledButton>}

                                <Line/>
                                <StyledButton google={true} onPress={() => promptAsync()}>
                                    <Fontisto name="google" color={'white'} size={25}/>
                                    <ButtonText google={true}>Sign in with Google</ButtonText>
                                </StyledButton>
                                <ExtraView>
                                    <ExtraText>Don't have an account already? </ExtraText>
                                    <TextLink onPress={handleSignUpPress}>
                                        <TextLinkContent>Signup</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        }
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

export default Login;