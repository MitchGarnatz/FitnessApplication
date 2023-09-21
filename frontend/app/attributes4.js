import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from 'expo-router';
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { useGlobalSearchParams } from 'expo-router';


import {
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

const attributes4 = () => {

    const glob = useGlobalSearchParams();

    const proceed = (status) => {
        const data = { 
            age: glob.age,
            height: glob.height,
            weight: glob.weight,
            gender: glob.gender,
            athletic_background: glob.athletic_background,
            physically_active: glob.physically_active,
            aesthetics: glob.aesthetics,
            strength: status
        };
        console.log(data);
        navigation.navigate('attributes5', data );
    }

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="light" />
        <InnerContainer>
          <PageTitle>Strength</PageTitle>
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
  );
};

export default attributes4;