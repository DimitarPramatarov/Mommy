import React, {useEffect, useCallback, useState, useContext, useMemo} from 'react';
import {View, Text} from 'react-native';
import UserContext from '../../Context';
import { getUserProfileService } from '../../services/profile/ProfileService';

interface IUserProfile {
    username: string,
}


const UserProfile = (props: IUserProfile) => {

    const context = useContext(UserContext);
    const [myProfileDetails, setProfile] = useState<any>([]);

    const getMyProfile = useCallback(async () => {
        let profile = await getUserProfileService(context.user.token, props.username);
        setProfile(profile);
    }, [])

useEffect(() => {
    getMyProfile()
}, [getMyProfile])

    return(
        <View>
        <Text>Photo: {myProfileDetails.mainPhotoUrl}</Text>
        <Text>Username: {myProfileDetails.userName}</Text>
        <Text>Descritpion: {myProfileDetails.description}</Text>
        <Text>Posts: {myProfileDetails.posts}</Text>
        <Text>Answers: {myProfileDetails.answers}</Text>
        <Text>Follows: {myProfileDetails.follows}</Text>
        </View>
    )
}

export default UserProfile