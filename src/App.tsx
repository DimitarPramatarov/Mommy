import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import UserContext from './Context';

export default function  App(props: any) {

  const [user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: true
  } : null);

  const login = (user: any) : void => {
    if(user.token == null) {
      return;
    } 
    setUser({
      ...user,
      isLoggedIn: true
    })
  }
  const logOut = () => {
    setUser({
      user: null,
      isLoggedIn: false
    })
  }

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <UserContext.Provider value={{
          user,
          login,
          logOut,
        }}>
        <Navigation colorScheme={colorScheme} />
          
        <StatusBar />
        </UserContext.Provider>
      </SafeAreaProvider>
    );
  }
}
