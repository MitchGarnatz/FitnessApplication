import React from 'react';
import { ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import {
  StyledContainer,
  PageTitle,
  SubTitle,
  Line,
  InnerContainer,
  TopRightContainer,
  CheckListContainer,
  CheckListItem,
  RedaptBackground,
  PlanSubTitle,
} from '../components/styles';

const WorkoutPlan = () => {
  return (
    <RedaptBackground>
    <ScrollView >
      <StyledContainer>
        <TopRightContainer>
            <Link style={{ color: 'black' }} href="/user/settings">
                <Ionicons name="notifications-circle-outline" size={30}></Ionicons>
            </Link>
        </TopRightContainer>
        <InnerContainer>
          <PageTitle>Welcome to Your Workout Plan</PageTitle>
          <SubTitle>Plan Title: Balanced</SubTitle>
          <Line />
          <SubTitle>Phases:</SubTitle>
          <CheckListContainer>
            <CheckListItem>
              <PlanSubTitle>Phase 1: Warm-up</PlanSubTitle>
            </CheckListItem>
            <CheckListItem>
              <PlanSubTitle>Phase 2: Strength Training</PlanSubTitle>
            </CheckListItem>
            <CheckListItem>
              <PlanSubTitle>Phase 3: Cardio</PlanSubTitle>
            </CheckListItem>
            <CheckListItem>
              <PlanSubTitle>Phase 4: Cool-down</PlanSubTitle>
            </CheckListItem>
          </CheckListContainer>
        </InnerContainer>
      </StyledContainer>
    </ScrollView>
    </RedaptBackground>
  );
};

export default WorkoutPlan;
