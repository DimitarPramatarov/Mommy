import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  React, {useContext} from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import CreatePost from '../components/post/CreatePost';
import AuthScreen from '../screens/AuthScreen';
import { RootStackParamList} from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import UserContext from '../Context';
import HomeScreen from '../screens/HomeScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Layout from '../constants/Layout';

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
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: true}} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="PostDetails" component={PostDetailScreen}/>
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }

}




