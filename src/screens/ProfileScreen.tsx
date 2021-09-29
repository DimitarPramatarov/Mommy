import React from 'react';
import {View} from 'react-native';
import UserProfile from '../components/profile/UserProfile';
import { RootStackScreenProps } from '../../types';


type Props = {
    route: any
 }

const ProfileScreen = (props: Props, {navigation} : RootStackScreenProps<'ProfileScreen'>) => {

    const username: string = props.route.params;    

    return(
        <View>
            <View>
            <UserProfile username={username}/>
            </View>
        </View>
    )
}


export default ProfileScreen