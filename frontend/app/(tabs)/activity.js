import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from 'react-native';
import { RedaptBackground } from '../components/styles';

const Activity = () => {
    return (
      <RedaptBackground>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Activity will be viewed here.</Text>
        </ScrollView>
      </RedaptBackground>
    );
  }
  
  export default Activity;