import React from 'react';
import { StatusBar} from 'expo-status-bar';
import { useNavigation } from 'expo-router';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar

} from './components/styles';

const Welcome = () => {
    const params = useLocalSearchParams();
    console.log(params.name);
    const name = params.name;
    const email = params.email;

    const navigation = useNavigation();

    const handleLogOutPress = () => {
        AsyncStorage.removeItem("@user"); // Clear user data
        navigation.navigate('login'); // Navigate to the 'welcome' screen
    };

    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer> 
                <WelcomeImage resizeMode="cover" source={require('./assets/waterfall.png')}/>
                <WelcomeContainer>   
                    <PageTitle welcome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>{name || 'Jonny Boy'}</SubTitle>
                    <SubTitle welcome={true}>{email || 'jonnyboy@gmail.com'}</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./assets/waterfall.png')} />
                        <Line/>
                        <StyledButton onPress={handleLogOutPress}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;