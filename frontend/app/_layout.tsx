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
            <Stack.Screen name="attributes1" options={{ headerShown: false }}/>
            <Stack.Screen name="attributes2" options={{ headerShown: false }}/>
            <Stack.Screen name="attributes3" options={{ headerShown: false }}/>
            <Stack.Screen name="attributes4" options={{ headerShown: false }}/>
            <Stack.Screen name="attributes5" options={{ headerShown: false }}/>
            <Stack.Screen name="attributes6" options={{ headerShown: false }}/>
            <Stack.Screen name="attributes7" options={{ headerShown: false }}/>
        </Stack>
    );
}

export default StackLayout;