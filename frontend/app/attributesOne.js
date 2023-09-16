import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
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
  StyledTextInput,
  ButtonText,
  RightIcon,
  MsgBox,
  Line,
} from './components/styles';

const { brand, darkLight } = Colors;

const AttributesOne = () => {
  const [showAgePicker, setShowAgePicker] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');

  const handleAgePicker = () => {
    setShowAgePicker(!showAgePicker);
  };

  const handleAgeSelect = (age) => {
    setSelectedAge(age);
    setShowAgePicker(false);
  };

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="light" />
        <InnerContainer>
          <PageTitle>Please Enter Your Age</PageTitle>
          <SubTitle>Attributes One</SubTitle>

          <Formik
            initialValues={{
              age: '',
            }}
            onSubmit={(values) => {
              values.age = selectedAge;
              console.log(values);
              navigation.navigate('login');
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values}) => (
              <StyledFormArea>
                <TouchableOpacity onPress={handleAgePicker}>
                  <StyledInputLabel>Age</StyledInputLabel>
                  <StyledTextInput
                    placeholder="Select Age"
                    placeholderTextColor={darkLight}
                    value={selectedAge}
                    onChangeText={handleChange('age')}
                    onBlur={handleBlur('age')}
                    editable={false}
                  />
                  <RightIcon>
                    <Ionicons name="md-arrow-dropdown" size={30} color={brand} />
                  </RightIcon>
                </TouchableOpacity>

                {showAgePicker && (
                  <ScrollView>
                    {[...Array(150).keys()].map((age) => (
                      <TouchableOpacity
                        key={age}
                        onPress={() => handleAgeSelect(age + 1)}
                      >
                        <StyledInputLabel>{age + 1}</StyledInputLabel>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}

                <MsgBox type="info">Selected Age: {selectedAge}</MsgBox>

                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Submit</ButtonText>
                  </StyledButton>
                <Line />
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default AttributesOne;