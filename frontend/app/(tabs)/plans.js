import { View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const Plans = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap:10, backgroundColor: '#1F2937' }}>
            <Link style={{color: 'white'}} href="/list/1">News One</Link>
            <Link style={{color: 'white'}} href="/list/2">News Two</Link>
            <Link style={{color: 'white'}} href="/list/3">News Three</Link>
        </View>
    )
}

export default Plans;