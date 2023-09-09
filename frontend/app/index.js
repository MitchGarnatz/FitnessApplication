import { Redirect } from 'expo-router';
import React, {useState} from 'react';

import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from './components/CredentialsContext';


export default function StartPage() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState(null);

  const checkLoginCredentials = () => {
    AsyncStorage.getItem('fitnessAppCredentials')
    .then((result) => {
      if (result !== null) {
        setStoredCredentials(JSON.parse(result));
      } else {
        setStoredCredentials(null)
      }
    })
    .catch(error => console.log(error))
  }

  if (!appReady) {
    return (
      <AppLoading 
      startAsync={checkLoginCredentials}
      onFinish={() => setAppReady(true)} 
      onError={console.warn}
      />
    )
  }

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