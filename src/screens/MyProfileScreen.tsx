import React from 'react';
import {View, Text} from 'react-native';
import MyPosts from '../components/post/MyPosts';
import MyProfile from '../components/profile/MyProfile';
import { RootStackScreenProps } from '../../types';



const MyProfileScreen = ({navigation} : RootStackScreenProps<'MyProfile'>) => {

    return(
        <View >
            <View>
            <MyProfile />
            </View>
            <View>
            <MyPosts {...navigation}/>
            </View>
        </View>
    )
}


export default MyProfileScreen