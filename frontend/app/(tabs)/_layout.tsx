import { Tabs } from "expo-router";
import { StyleSheet } from 'react-native';
import React from 'react';
import { Octicons, Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs screenOptions={{
    //   tabBarActiveTintColor: 'black', // Color for the active tab
      tabBarInactiveTintColor: 'black', // Color for the inactive tab
    }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} /> // Use color from props
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          headerTitle: 'Activity',
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color }) => (
            <Octicons name="pulse" size={30} color={color} /> // Use color from props
          ),
          headerShown: true,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          headerTitle: 'Workout',
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color }) => (
            <Ionicons name="barbell-sharp" size={30} color={color} /> // Use color from props
          ),
          headerShown: true,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          headerTitle: 'Plans',
          tabBarLabel: 'Plans',
          tabBarIcon: ({ color }) => (
            <Ionicons name="reader-outline" size={30} color={color} /> // Use color from props
          ),
          headerShown: true,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerTitle: 'User',
          tabBarLabel: 'User',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={30} color={color} /> // Use color from props
          ),
          headerShown: false,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  )
}
