import { Stack } from "expo-router"
import React from 'react';

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            <Stack.Screen name="login" options={{ headerShown: false }}/>
            <Stack.Screen name="signup" options={{ headerShown: false }}/>
            <Stack.Screen name="welcome" options={{ headerShown: false }}/>
            <Stack.Screen name="LinkVerification" options={{ headerShown: false }}/>
            <Stack.Screen name="attributesOne" options={{ headerShown: false }}/>
        </Stack>
    );
}

export default StackLayout;