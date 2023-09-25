import { View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const Plans = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap:10, backgroundColor: '#1F2937' }}>
            <Link style={{color: 'white'}} href="/list/1">Workout Plan 1: Aesthetics</Link>
            <Link style={{color: 'white'}} href="/list/2">Workout Plan 2: Strength</Link>
            <Link style={{color: 'white'}} href="/list/3">Workout Plan 3: Speed</Link>
            <Link style={{color: 'white'}} href="/list/4">Workout Plan 4: Cardio & Heart</Link>
            <Link style={{color: 'white'}} href="/list/5">Workout Plan 5: Regain Strength</Link>
            <Link style={{color: 'white'}} href="/list/6">Workout Plan 6: Balanced</Link>
        </View>
    )
}

export default Plans;