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

const attributes2 = () => {

    const glob = useGlobalSearchParams();

    const proceed = (status) => {
        const data = { 
            age: glob.age,
            height: glob.height,
            weight: glob.weight,
            gender: glob.gender,
            athletic_background: glob.athletic_background,
            physically_active: status 
        };
        navigation.navigate('attributes3', data);
    }

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="light" />
        <InnerContainer>
          <PageTitle>Are you currently physically active?</PageTitle>
            <StyledFormArea>
                
            <StyledButton onPress={() => proceed('Yes')}>
                  <ButtonText>Yes</ButtonText>
                </StyledButton>
                
                <StyledButton onPress={() => proceed('No')}>
                  <ButtonText>No</ButtonText>
                </StyledButton>

                <Line />

            </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default attributes2;