import { Stack } from "expo-router"
import React from 'react';
import CustomHeader from "../../components/CustomHeader";
import { RedaptBackground } from "../../components/styles";

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen 
                name="index" 
                options={{ 
                    headerShown: true, // Hide the header
                    header: () => <CustomHeader/>, 
                }}
            /> 
        </Stack>
    );
}

export default StackLayout;