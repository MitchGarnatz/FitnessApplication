import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import PickerSelect from 'react-native-picker-select'; // Import PickerSelect
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
    setSelectedAge(age.toString());
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
              navigation.navigate('login', values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <TouchableOpacity onPress={handleAgePicker}>
                  <StyledInputLabel>Age</StyledInputLabel>
                  <PickerSelect
                    value={selectedAge}
                    onValueChange={(value) => setSelectedAge(value)}
                    items={[...Array(150).keys()].map((age) => ({
                      label: `${age + 1}`,
                      value: `${age + 1}`,
                    }))}
                    style={{ ...pickerSelectStyles }} // You can customize the style
                    useNativeAndroidPickerStyle={false}
                  />
                  {/* <RightIcon>
                    <Ionicons name="md-arrow-dropdown" size={30} color={brand} />
                  </RightIcon> */}
                </TouchableOpacity>

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

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};

export default AttributesOne;