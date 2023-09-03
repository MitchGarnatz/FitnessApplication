import React, { useState } from 'react';
import { View, ActivityIndicator, Link } from 'react-native';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { useNavigation } from 'expo-router';
import axios from 'axios';
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
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const navigation = useNavigation();

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
                navigation.navigate('welcome', {...data[0]});
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
                                <StyledButton google={true} onPress={handleSubmit}>
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