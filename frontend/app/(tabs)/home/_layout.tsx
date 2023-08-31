import { Stack } from "expo-router"
import React from 'react';

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{ 
                    headerShown: false, // Hide the header
                    headerTitle: 'Home Screen', 
                }}
            />
        </Stack>
    );
}

export default StackLayout;