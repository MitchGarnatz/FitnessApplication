import { Tabs } from "expo-router"
import { StyleSheet } from 'react-native';
import React from 'react';

export default () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarStyle: {
            height: 70,
            borderWidth: 1,
            // borderRadius: 50,
            borderColor: 'yellow',
            borderTopColor: 'gold',
            backgroundColor: 'white',
            
            }}}>
            <Tabs.Screen 
                name="home" 
                options={{ 
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: styles.tabBarLabel,
                    headerShown: false 
                }} 
            />
            <Tabs.Screen 
                name="list" 
                options={{
                    headerShown: false, // Hide the header
                    headerTitle: 'List', 
                    tabBarLabel: 'List',
                    tabBarLabelStyle: styles.tabBarLabel, // Apply your custom style here
                }}
            />
            {/* <Tabs.Screen 
                name="login" 
                options={{
                    headerShown: false, // Hide the header
                    headerTitle: 'LogIn', 
                    tabBarLabel: 'LogIn',
                    tabBarLabelStyle: styles.tabBarLabel, // Apply your custom style here
                }} */}
            {/* /> */}
        </Tabs>
    )
}


const styles = StyleSheet.create({
    tabBarLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
    tabBarIndicator: {
        backgroundColor: '#007bff', // Indicator color
        height: 3, // Indicator height
    },
  });