import { Redirect } from 'expo-router';
import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';

import HomePage from './(tabs)/home';

export default function StartPage() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState(null);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Fetch and set stored credentials
        const result = await AsyncStorage.getItem('fitnessAppCredentials');

        if (result !== null) {
          console.log(JSON.parse(result).firstLogin);
          console.log(JSON.parse(result));
          
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }

        await SplashScreen.hideAsync();
        setAppReady(true);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    prepare();

    console.log(storedCredentials);
  }, []);


// Inside your StartPage component
  return (
    <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      {appReady ? (
        storedCredentials ? (
          <Redirect href="(tabs)/home" />
        ) : (
          <Redirect href="/login" />
        )
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </CredentialsContext.Provider>
  );
};