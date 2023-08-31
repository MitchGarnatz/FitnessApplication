import { Link, Stack } from 'expo-router';
import { View, Text, Button } from 'react-native';
import React from 'react';

const HomePage = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1F2937' }}>
      <Link style={{color: 'white'}} href="/home/settings">Push Settings</Link>
      <Link style={{color: 'white'}} href="/login">Push Settings</Link>
    </View>
  )
}

export default HomePage;