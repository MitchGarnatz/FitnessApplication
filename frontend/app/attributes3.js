import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from 'expo-router';
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { useGlobalSearchParams } from 'expo-router';


import {
    RedaptBackground,
  Colors,
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledButton,
  NewLine,
  ButtonText,
  Line,
} from './components/styles';

const { brand, darkLight } = Colors;

const attributes3 = () => {

    const glob = useGlobalSearchParams();

    const proceed = (status) => {
        const data = { 
            email: glob.email,
            age: glob.age,
            height: glob.height,
            weight: glob.weight,
            gender: glob.gender,
            athletic_background: glob.athletic_background,
            physically_active: glob.physically_active,
            aesthetics: status
        };

        navigation.navigate('attributes4', data);
    }

  const navigation = useNavigation();

  return (
    <RedaptBackground>
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="light" />
        <InnerContainer>
          <PageTitle>Aesthetics</PageTitle>
          <SubTitle>Please rate your desire to improve in this area of fitness.</SubTitle>
          <SubTitle>1 = No desire, 2 = moderate low, 3 moderate, 4 = moderate high, 5 = High desire</SubTitle>
         
            <StyledFormArea>

                <StyledButton onPress={() => proceed('5')}>
                  <ButtonText>5</ButtonText>
                </StyledButton>
                
                <StyledButton onPress={() => proceed('4')}>
                  <ButtonText>4</ButtonText>
                </StyledButton>
                <StyledButton onPress={() => proceed('3')}>
                  <ButtonText>3</ButtonText>
                </StyledButton>
                
                <StyledButton onPress={() => proceed('2')}>
                  <ButtonText>2</ButtonText>
                </StyledButton>
                <StyledButton onPress={() => proceed('1')}>
                  <ButtonText>1</ButtonText>
                </StyledButton>

                <Line />

            </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
    </RedaptBackground>
  );
};

export default attributes3;