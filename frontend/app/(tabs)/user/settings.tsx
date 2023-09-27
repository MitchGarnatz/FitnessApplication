import { View , Text} from 'react-native';
import { Stack } from 'expo-router'; 
import React from 'react';
import { RedaptBackground } from '../../components/styles';

const settings = () => {
    return (
        <RedaptBackground>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap:10}}>
                <Stack.Screen options={{ headerTitle: `Settings`}} />
                <Text style={{color: 'white'}}>settings</Text>
            </View>
        </RedaptBackground>
    );
}

export default settings;