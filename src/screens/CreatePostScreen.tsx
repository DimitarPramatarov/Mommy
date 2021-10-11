import React from 'react';
import {View} from 'react-native';
import {RootStackScreenProps} from '../../types';
import CreatePost from '../components/post/CreatePost';

const CreatePostScreen = ({navigation} : RootStackScreenProps<"CreatePost">) => {

    
    return (
        <View>
            <CreatePost {...navigation}/>
        </View>
    )
}

export default CreatePostScreen