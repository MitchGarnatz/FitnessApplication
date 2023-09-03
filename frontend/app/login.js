import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { useNavigation } from 'expo-router';
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
import { StackRouter } from '@react-navigation/native';

const { brand, darkLight } = Colors;


const Login = () => {

    const navigation = useNavigation();

    const handleLoginButtonClick = () => {
        navigation.navigate('welcome'); // Navigate to the 'welcome' screen
    };

    const handleSignUpPress = () => {
        navigation.navigate('signup'); // Navigate to the 'welcome' screen
    };

    const [hidePassword, setHidePassword] = useState(true);

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
                        onSubmit={(values) => {
                            console.log(values);
                            handleLoginButtonClick();
                        }}   
                    >   
                        {({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>
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
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Login</ButtonText>
                                </StyledButton>
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