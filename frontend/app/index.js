import { Redirect } from 'expo-router';
import React, {useState, useEffect} from 'react';

import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';


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
  }, []);

  console.log(storedCredentials);
  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      {storedCredentials ? 
        ( <Redirect href="/welcome"/> ) : 
        ( <Redirect href="/login" /> )
      }
    </CredentialsContext.Provider>
  )
};