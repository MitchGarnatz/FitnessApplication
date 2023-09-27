import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from 'expo-router';
import KeyboardAvoidingWrapper from './components/KeyboardAvoidingWrapper';
import { CheckBox } from 'react-native-elements';
import { useGlobalSearchParams } from 'expo-router';
import { baseAPIUrl } from './components/shared';
import axios from 'axios';

import {
  Colors,
  StyledContainer,
  InnerContainer,
  RedaptBackground,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledInputLabel,
  StyledButton,
  NewLine,
  ButtonText,
  Line,
  StyledCheckBox,
} from './components/styles';

const { brand, green } = Colors;

const attributes7 = () => {
    const [legInjury, setLegInjury] = useState(false);
    const [armInjury, setArmInjury] = useState(false);
    const [heartProblems, setHeartProblems] = useState(false);
    const [upperBackProblems, setUpperBackProblems] = useState(false);
    const [lowerBackProblems, setLowerBackProblems] = useState(false);
  
    const navigation = useNavigation();

    const glob = useGlobalSearchParams();
  
    const proceed = () => {
      const data = {
        email: glob.email,

        age: glob.age,
        height: glob.height,
        weight: glob.weight,
        gender: glob.gender,
        athletic_background: glob.athletic_background,

        physically_active: glob.physically_active,
        weight_loss: glob.weight_loss,
        aesthetics: glob.aesthetics,
        strength: glob.strength,
        speed: glob.speed,

        leg_injury: legInjury ? '1' : '0',
        arm_injury: armInjury ? '1' : '0',
        heart_problems: heartProblems ? '1' : '0',
        upper_back_problems: upperBackProblems ? '1' : '0',
        lower_back_problems: lowerBackProblems ? '1' : '0',
        
      };

      const url = `${baseAPIUrl}/user/predict`;

      axios
        .post(url, data)
        .then((response) => {
            const result = response.data
            const {message, status, data} = result;

            console.log(data);
            console.log(status);
            console.log(message);

            navigation.navigate('(tabs)', {...data} );
        
        })
        .catch(error => {
            console.log(error);
        })
    };
  
    return (
        <RedaptBackground>
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style="light" />
          <InnerContainer>
            <PageTitle>Medical Conditions</PageTitle>
            <SubTitle>Please check any medical conditions you have:</SubTitle>
  
            <StyledFormArea>
              <CheckBox
                title="Leg Injury"
                checked={legInjury}
                onPress={() => setLegInjury(!legInjury)}
                checkedColor={green} // Color for the checked icon
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 2, width: '100%', alignSelf: 'center'}} // Style for the container View
                textStyle={{ color: 'white', marginLeft: 10 }} // Style for the label text
              />
  
            <CheckBox
                title="Arm Injury"
                checked={armInjury}
                onPress={() => setArmInjury(!armInjury)}
                checkedColor={green} // Color for the checked icon
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 2, width: '100%', alignSelf: 'center'}} // Style for the container View
                textStyle={{ color: 'white', marginLeft: 10 }} // Style for the label text
            />
  
              <CheckBox
                title="Heart Problems"
                checked={heartProblems}
                onPress={() => setHeartProblems(!heartProblems)}
                checkedColor={green} // Color for the checked icon
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 2, width: '100%', alignSelf: 'center'}} // Style for the container View
                textStyle={{ color: 'white', marginLeft: 10 }} // Style for the label text
              />
  
              <CheckBox
                title="Upper Back Problems"
                checked={upperBackProblems}
                onPress={() => setUpperBackProblems(!upperBackProblems)}
                checkedColor={green} // Color for the checked icon
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 2, width: '100%', alignSelf: 'center'}} // Style for the container View
                textStyle={{ color: 'white', marginLeft: 10 }} // Style for the label text
              />
  
              <CheckBox
                title="Lower Back Problems"
                checked={lowerBackProblems}
                onPress={() => setLowerBackProblems(!lowerBackProblems)}
                checkedColor={green} // Color for the checked icon
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 2, width: '100%', alignSelf: 'center'}} // Style for the container View
                textStyle={{ color: 'white', marginLeft: 10 }} // Style for the label text
              />

              <NewLine></NewLine>
  
              <StyledButton onPress={proceed}>
                <ButtonText>Submit</ButtonText>
              </StyledButton>
  
              <Line />
            </StyledFormArea>
          </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
      </RedaptBackground>
    );
  };
  

export default attributes7;
