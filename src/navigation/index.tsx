import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  React, {useContext} from 'react';
import { ColorSchemeName } from 'react-native';

import AuthScreen from '../screens/AuthScreen';
import LinkingConfiguration from './LinkingConfiguration';
import UserContext from '../Context';

import DrawerNavigator from './DrawerStackNavigator'
import { RootStackParamList } from '../../types';
import MainStackNavigator from './MainStackNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const context = useContext(UserContext);
  let isLogged = false;
  if(context.user != null)
  {
    if(context.user.token != null || context.user.token != undefined)
    isLogged = true;
  }
  if(isLogged == false)
  {
    return(
     <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
    )
  }
  else {
    return (
        <DrawerNavigator />
    );
  }

}




