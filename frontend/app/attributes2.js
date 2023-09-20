import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from 'expo-router';
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';


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

    const proceed = (status) => {
        console.log(status);
        const data = { physically_active: status };
        console.log(data);
        navigation.navigate('attributes3', {data});
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