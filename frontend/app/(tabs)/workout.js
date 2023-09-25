import React from 'react';
import { ScrollView } from 'react-native';
import {
  StyledContainer,
  PageTitle,
  SubTitle,
  Line,
  InnerContainer,
  TopRightContainer,
  CheckListContainer,
  CheckListItem,
  PlanSubTitle,
} from '../components/styles';

const WorkoutPlan = () => {
  return (
    <ScrollView style={{backgroundColor: '#1F2937'}}>
      <StyledContainer>
        <TopRightContainer>
          {/* Add an icon here if needed */}
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
  );
};

export default WorkoutPlan;
