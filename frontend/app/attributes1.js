import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import PickerSelect from 'react-native-picker-select'; // Import PickerSelect
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { useGlobalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


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
  RedaptBackground,
} from './components/styles';

const { brand, darkLight } = Colors;

const attributes1 = () => {
  const [showAgePicker, setShowAgePicker] = useState(false);
  const [selectedAge, setSelectedAge] = useState('');
  const [showHeightPicker, setShowHeightPicker] = useState(false);
  const [selectedHeight, setSelectedHeight] = useState('');
  const [showWeightPicker, setShowWeightPicker] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState('');
  const [showGenderPicker, setShowGenderPicker] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');
  const [showAthleticBackgroundPicker, setShowAthleticBackgroundPicker] = useState(false);
  const [selectedAthleticBackground, setSelectedAthleticBackground] = useState('');

  const glob = useGlobalSearchParams();

  const handleAgePicker = () => {
    setShowAgePicker(!showAgePicker);
  };

  const handleHeightPicker = () => {
    setShowHeightPicker(!showHeightPicker);
  };

  const handleWeightPicker = () => {
    setShowWeightPicker(!showWeightPicker);
  };

  const handleGenderPicker = () => {
    setShowGenderPicker(!showGenderPicker);
  };

  const handleAthleticBackgroundPicker = () => {
    setShowAthleticBackgroundPicker(!showAthleticBackgroundPicker);
  };

  const navigation = useNavigation();

  return (
    <RedaptBackground>
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="light" />
        <InnerContainer>
          <PageTitle>Enter User Information Below:</PageTitle>

          <Formik
            initialValues={{
              age: '',
            }}
            onSubmit={(values) => {
                values.age = selectedAge;
                values.height = selectedHeight;
                values.weight = selectedWeight;
                values.gender = selectedGender;
                values.athletic_background = selectedAthleticBackground;
                values.email = glob.email;

                if (values.age == '' || values.height == '' || values.weight == '' || values.gender == '') {
                  console.log("fill in all fields before proceeding")
              } else {
                console.log(values);
                  navigation.navigate('attributes2', values);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <TouchableOpacity onPress={handleAgePicker}>
                  <StyledInputLabel>Age</StyledInputLabel>
                  <NewLine></NewLine>
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
                </TouchableOpacity>

                <NewLine></NewLine>

                <TouchableOpacity onPress={handleHeightPicker}>
                  <StyledInputLabel>Height</StyledInputLabel>
                  <NewLine></NewLine>
                  <PickerSelect
                    value={selectedHeight}
                    onValueChange={(value) => setSelectedHeight(value)}
                    items={[...Array(100).keys()].map((height) => ({
                      label: `${height + 1}`,
                      value: `${height + 1}`,
                    }))}
                    style={{ ...pickerSelectStyles }} // You can customize the style
                    useNativeAndroidPickerStyle={false}
                  />
                </TouchableOpacity>

                <NewLine></NewLine>

                <TouchableOpacity onPress={handleWeightPicker}>
                  <StyledInputLabel>Weight</StyledInputLabel>
                  <NewLine></NewLine>
                  <PickerSelect
                    value={selectedWeight}
                    onValueChange={(value) => setSelectedWeight(value)}
                    items={[...Array(400).keys()].map((weight) => ({
                      label: `${weight + 1}`,
                      value: `${weight + 1}`,
                    }))}
                    style={{ ...pickerSelectStyles }} // You can customize the style
                    useNativeAndroidPickerStyle={false}
                  />
                </TouchableOpacity>

                <NewLine></NewLine>

                <TouchableOpacity onPress={handleGenderPicker}>
                  <StyledInputLabel>Gender</StyledInputLabel>
                  <NewLine></NewLine>
                  <PickerSelect
                    value={selectedGender}
                    onValueChange={(value) => setSelectedGender(value)}
                    items={[
                      { label: 'Male', value: '1' },
                      { label: 'Female', value: '0' },
                      { label: 'Other', value: '0' },
                    ]}
                    style={{ ...pickerSelectStyles }} // You can customize the style
                    useNativeAndroidPickerStyle={false}
                    />
                </TouchableOpacity>

                <NewLine></NewLine>

                <TouchableOpacity onPress={handleAthleticBackgroundPicker}>
                  <StyledInputLabel>Level of Athletic Background</StyledInputLabel>
                  <NewLine></NewLine>
                  <PickerSelect
                    value={selectedAthleticBackground}
                    onValueChange={(value) => setSelectedAthleticBackground(value)}
                    items={[
                      { label: 'Advanced', value: '0' },
                      { label: 'Intermediate', value: '2' },
                      { label: 'Beginner', value: '1' },
                      { label: 'None', value: '3' },
                    ]}
                    style={{ ...pickerSelectStyles }} // You can customize the style
                    useNativeAndroidPickerStyle={false}
                    />
                </TouchableOpacity>
                
                <NewLine></NewLine>
                <NewLine></NewLine>
                
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Proceed</ButtonText>
                </StyledButton>

                <Line />

              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
    </RedaptBackground>
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

export default attributes1;