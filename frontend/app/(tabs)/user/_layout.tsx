import { Stack } from "expo-router"
import React from 'react';

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{ 
                    headerShown: true, // Hide the header
                    headerTitle: 'Profile', 
                }}
            />
        </Stack>
    );
}

export default StackLayout;