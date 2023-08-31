import { View, Text } from 'react-native';
import { Stack, useGlobalSearchParams } from 'expo-router'; 
import React from 'react';

const DetailsPage = () => {
    const { id } = useGlobalSearchParams();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap:10, backgroundColor: '#1F2937' }}>
            <Stack.Screen options={{ headerTitle: `Details #${id}`}} />

            <Text style={{color: 'white'}}>My Details for: {id}</Text>
        </View>
    );
}

export default DetailsPage;
