import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import { Text, } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from '../../types';
import MainStackNavigator from './MainStackNavigator';

import Logout from '../components/auth/Logout';
import UserContext from '../Context';
import CreatePostScreen from '../screens/CreatePostScreen';
import MyProfileScreenStack from './MyProfileScreenStack';

const Drawer = createDrawerNavigator<RootStackParamList>();

const LogoTitle = (props: any) => {
    return(
        <Text>Mommy</Text>
    )
}


const DrawerNavigator = (navigation: any) =>{

    const context = useContext(UserContext);

    return(
        <Drawer.Navigator
        initialRouteName="DrawerRoot"
        screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        drawerPosition: "left"
        
        }}
        >
          <Drawer.Screen name="Home" component={MainStackNavigator} />
          <Drawer.Screen name='Profile' component={MyProfileScreenStack}/>
          <Drawer.Screen name="CreatePost" component={CreatePostScreen}/>
          <Drawer.Screen name="Logout" component={Logout}/>
        </Drawer.Navigator>
    )
}


export default DrawerNavigator