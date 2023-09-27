import { useGlobalSearchParams } from 'expo-router';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  InnerContainer,
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
} from '../../components/styles';

const Home = () => {

  const glob = useGlobalSearchParams();

  console.log("hello world");
  console.log(glob);

  return (
    <RedaptBackground>
      <ScrollView>
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle>Welcome to Redapt</PageTitle>
          <SubTitle>Personalized fitness generated with AI</SubTitle>
          <IconBg>
            <Octicons  name="paper-airplane" size={125} color={'white'} />
          </IconBg>
          
          <NewLine/>
          <NewLine/>
          <NewLine/>

          <InfoText>
            Explore the world of fitness with <EmphasizeText>personalized AI recommendations</EmphasizeText>.
          </InfoText>
          <NewLine/>
          <InfoText>
            Achieve your fitness goals like never before!
          </InfoText>
        </WelcomeContainer>
      </InnerContainer>
      </ScrollView>
    </RedaptBackground>
  );
};

export default Home;
