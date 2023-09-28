import { useGlobalSearchParams } from 'expo-router';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet } from 'react-native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  ContentContainer,
  WelcomeContainer,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledButton,
  ButtonText,
  RedaptBackground,
  Avatar,
  IconBg,
  NewLine,
  InfoText,
  EmphasizeText,
  Bubble,
} from '../../components/styles';
import CustomHeader from '../../components/CustomHeader';

const Home = () => {

  const glob = useGlobalSearchParams();

  console.log("hello world");
  console.log(glob);

  return (
    <RedaptBackground>
      <ScrollView>
      <ContentContainer>
      <StatusBar style="light" />
        <WelcomeContainer>
        <Bubble><PageTitle>Welcome to Redapt</PageTitle>
          <SubTitle>Personalized fitness generated with AI</SubTitle></Bubble>
          <IconBg>
            <Octicons  name="paper-airplane" size={125} color={'grey'} />
          </IconBg>
          
          <NewLine/>
          <NewLine/>
          <NewLine/>

          <Bubble>
            <InfoText>
              Explore the world of fitness with <EmphasizeText>personalized AI recommendations</EmphasizeText>.
            </InfoText>
          </Bubble>
          <NewLine/>
          <Bubble>
            <InfoText >
              Achieve your fitness goals like never before!
            </InfoText>
          </Bubble>
        </WelcomeContainer>
      </ContentContainer>
      </ScrollView>
      </RedaptBackground>
  );
};

export default Home;
