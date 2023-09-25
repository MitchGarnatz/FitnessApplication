import { View , Text} from 'react-native';
import { Stack } from 'expo-router'; 
import React from 'react';

const settings = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap:10, backgroundColor: '#1F2937' }}>
            <Stack.Screen options={{ headerTitle: `Settings`}} />
            <Text style={{color: 'white'}}>settings</Text>
        </View>
    );
}

export default settings;