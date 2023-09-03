import React from 'react';
import { StatusBar} from 'expo-status-bar';
import { useNavigation } from 'expo-router';

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
    const navigation = useNavigation();

    const handleLogOutPress = () => {
        navigation.navigate('login'); // Navigate to the 'welcome' screen
    };

    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./assets/waterfall.png')}/>
                <WelcomeContainer>   
                    <PageTitle welcome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>Jonny Boy</SubTitle>
                    <SubTitle welcome={true}>jonnyboy@gmail.com</SubTitle>
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