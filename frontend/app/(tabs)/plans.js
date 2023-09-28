import { View } from 'react-native';
import { Link } from 'expo-router';
import { Octicons, Ionicons } from '@expo/vector-icons'
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from 'react-native';

import {
    TopRightContainer,
    RedaptBackground,
    InnerContainer,
    StyledContainer,
  } from '../components/styles';

const Plans = () => {
    return (
        <RedaptBackground>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TopRightContainer>
                    <Link style={{ color: '#333333' }} href="/user/settings">
                        <Ionicons name="notifications-circle-outline" size={30}></Ionicons>
                    </Link>
                </TopRightContainer>
                
                <Link style={{color: '#333333'}} href="/list/1">Workout Plan 1: Aesthetics</Link>
                <Link style={{color: '#333333'}} href="/list/2">Workout Plan 2: Strength</Link>
                <Link style={{color: '#333333'}} href="/list/3">Workout Plan 3: Speed</Link>
                <Link style={{color: '#333333'}} href="/list/4">Workout Plan 4: Cardio & Heart</Link>
                <Link style={{color: '#333333'}} href="/list/5">Workout Plan 5: Regain Strength</Link>
                <Link style={{color: '#333333'}} href="/list/6">Workout Plan 6: Balanced</Link>
                
            </ScrollView>
        </RedaptBackground>
    )
}

export default Plans;