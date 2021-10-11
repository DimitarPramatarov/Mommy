import React from 'react';
import {Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import MyProfileScreen from '../screens/MyProfileScreen';
import PostDetailScreen from '../screens/PostDetailScreen';




const Stack = createNativeStackNavigator<RootStackParamList>();


const MyProfileScreenStack = () =>{
    return(
        <Stack.Navigator 
        initialRouteName="MyProfile"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="MyProfile" component={MyProfileScreen}/>
        <Stack.Screen name='MyPostDetails' component={PostDetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


export default MyProfileScreenStack