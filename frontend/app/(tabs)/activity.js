import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const Activity = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap:10, backgroundColor: '#1F2937' }}>
            <Text style={{color: 'white'}}>Activity will be viewed here.</Text>
        </View>
    )
}

export default Activity;