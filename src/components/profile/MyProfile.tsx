import React, {useEffect, useCallback, useState, useContext, useMemo} from 'react';
import {View, Text, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import UserContext from '../../Context';
import { getMyProfileService } from '../../services/profile/ProfileService';

const MyProfile = () => {
    
    const context = useContext(UserContext);
    const [myProfileDetails, setProfile] = useState<any>([]);
    const [description, setDescription] = useState(myProfileDetails);
    const [isEdit, setIsEdit] = useState(false);

    const getMyProfile = useCallback(async () => {
        let profile = await getMyProfileService(context.user.token);
        setProfile(profile);
    }, [])

    const handleIsEdit = () => {
        setIsEdit(true);
    }

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setDescription(e.nativeEvent.text);
    }

    const handleSave = () => {
        const changeDescription = Object.assign(
            myProfileDetails,
            {description: description}
        )

        setProfile(changeDescription)
        setIsEdit(false);

       
    }

useEffect(() => {
    getMyProfile()
}, [getMyProfile])

    return(
        <View>
        <Text>Photo: {myProfileDetails.mainPhotoUrl}</Text>
        <Text>Username: {myProfileDetails.userName}</Text>
        <TouchableOpacity onPress={handleIsEdit}>
        {isEdit ? <View>
            <TextInput
            value={description == null ? "Add description" : description}
            onChange={handleChange}
            />
            <TouchableOpacity onPress={handleSave}><Text>Save</Text></TouchableOpacity>
        </View> : <Text>Descritpion: {myProfileDetails.description}</Text>}
        </TouchableOpacity>
        <View>
        <Text>Posts: {myProfileDetails.posts}</Text>
        </View>
        <View>
        <Text>Answers: {myProfileDetails.answers}</Text>
        </View>
        <View>
        <Text>Follows: {myProfileDetails.follows}</Text>
        </View>
        </View>
    )
}

export default MyProfile