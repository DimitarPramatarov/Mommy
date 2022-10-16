import React from 'react';
import {Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList} from '../../types';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import DrawerNavigator from './DrawerStackNavigator';

const LogoTitle = (props: any) => {
    return(
        <Text>Mommy</Text>
    )
}

interface IProps {
    props: any
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Root" screenOptions={{headerShown: false,
            headerTitle: props => <LogoTitle {...props}/>
            
        }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
            <Stack.Screen name="PostDetails" component={PostDetailScreen}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    )

}


export default MainStackNavigator
