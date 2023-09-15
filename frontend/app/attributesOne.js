import React, { useState, useEffect } from 'react';
import { useNavigation, useGlobalSearchParams } from 'expo-router';
import { StatusBar} from 'expo-status-bar';
import { Text } from 'react-native';
import { IconBg, InnerContainer, StyledContainer, TopHalf, BottomHalf, Colors, InfoText, EmphasizeText, PageTitle, StyledButton, ButtonText, InlineGroup, TextLinkContent, TextLink} from './components/styles';
import { Octicons, Ionicons } from '@expo/vector-icons';

const { brand, green } = Colors;

const attributesOne = () => {

    const navigation = useNavigation();

    return (
        <StyledContainer>
            <StatusBar style="light"/>
            <InnerContainer> 
                <PageTitle welcome={true}>Welcome!</PageTitle>
                <StyledButton 
                onPress={() => navigation.navigate('login')}
                style={{ backgroundColor: green, flexDirection: 'row'}}>
                    <ButtonText>Proceed </ButtonText>
                    <Ionicons name="arrow-forward-circle" size={25} color={'white'}/>
                </StyledButton>
            </InnerContainer>
        </StyledContainer>
    );
}

export default attributesOne;