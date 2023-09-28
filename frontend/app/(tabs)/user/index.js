import { View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import {useEffect, useState, useContext} from 'react';
import { StatusBar} from 'expo-status-bar';
import { useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../../components/CredentialsContext';

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
    TopRightContainer,
    Avatar,
    RedaptBackground

} from '../../components/styles';

const Profile = () => {
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('fitnessAppCredentials')
          .then((result) => {
            if (result) {
                const storedCredentials = JSON.parse(result);
                setName(storedCredentials.name);
                setEmail(storedCredentials.email);
            } else {
              console.log('No storedCredentials found in AsyncStorage.');
            }
          })
          .catch((error) => {
            console.log('Error fetching storedCredentials:', error);
          });
      });

    const navigation = useNavigation();

    const handleLogOutPress = () => {
        AsyncStorage.removeItem('fitnessAppCredentials')
        .then(() => {
            setStoredCredentials('');
            console.log('credentials erased')
            navigation.navigate('login'); // Navigate to the 'welcome' screen
        })
        .catch((error) => console.log(error)); // Clear user data
    };

    return (
        <RedaptBackground>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar style="light"/>
            <InnerContainer> 
                <WelcomeContainer>   
                    <TopRightContainer>
                        <Link style={{ color: 'black' }} href="/user/settings">
                            <Ionicons name="settings-outline" size={30}></Ionicons>
                        </Link>
                    </TopRightContainer>
                    <PageTitle welcome={true}>Welcome!</PageTitle>
                    <SubTitle welcome={true}>{name || 'Jonny Boy'}</SubTitle>
                    <SubTitle welcome={true}>{email || 'jonnyboy@gmail.com'}</SubTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('../../assets/waterfall.png')} />
                        <Line/>
                        <StyledButton onPress={handleLogOutPress}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
            </ScrollView>
        </RedaptBackground>
    );
}

export default Profile;