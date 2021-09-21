import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import UserContext from './src/Context';
//import {setJwt, getJwt} from './src/services/auth/JwtService';

const App = (props: any) => {

  const [user, setUser] = useState(props.user ? {
    ...props.user,
    loggedIn: false
  } : null);
  
  // const checkUser = async () => {
  //   const userToken = await getJwt();
  //   if(userToken != ''){
  //     setUser({
  //       ...user,
  //       isLoggedIn: true
  //     })
  //   }
  // }

  // if(user == null)
  // {
  //   checkUser();
  // }


  const login = async (user: any) : Promise<void> => {
    if(user.token == null) {
      return;
    } 
    setUser({
      ...user,
      isLoggedIn: true
    })
    //await setJwt(user.token);
   // let token = await getJwt();

    //console.log(token);
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

export default App;