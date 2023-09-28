import { View, Text } from 'react-native';
import { Stack, useGlobalSearchParams } from 'expo-router'; 
import React from 'react';
import { RedaptBackground } from '../components/styles';
import CustomHeader from '../components/CustomHeader';

const DetailsPage = () => {
    const { id } = useGlobalSearchParams();

    return (
        <RedaptBackground>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap:10}}>
                <Stack.Screen options={{ headerTitle: `Details #${id}`, header: () => <CustomHeader/>, }} />

                <Text style={{color: 'white'}}>My Details for: {id}</Text>
            </View>
        </RedaptBackground>
    );
}

export default DetailsPage;
