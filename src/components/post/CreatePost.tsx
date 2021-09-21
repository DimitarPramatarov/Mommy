import React, {useState, useContext} from 'react';
import { TextInput, Text, View, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native'
import { RootStackScreenProps } from '../../../types';
import UserContext from '../../Context';
import {addPost} from '../../services/post/PostService';

const CreatePost = ({navigation} : RootStackScreenProps<"CreatePost">) => {
    const context = useContext(UserContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const hadnleTitle = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setTitle(e.nativeEvent.text);
    }

    const handleDescription = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setDescription(e.nativeEvent.text);
    }

    const handleSubmit = async () => {
        const token = context.user.token;
        let result = await addPost(title, description, token);
        console.log(result);
        if(result == "Your post is created!"){
            navigation.navigate("HomeScreen");
        }
        
    }

    return(
        <View>
            <View>
            <Text>
                Your title
                </Text>
            <TextInput
                placeholder="Your title..."
                value={title}
                onChange={hadnleTitle}
            />
            </View>
            <View>
                <Text>
                Your description
                </Text>
            <TextInput
                placeholder="Your description..."
                value={description}
                onChange={handleDescription}
            />
            </View>
            <View>
            <TouchableOpacity onPress={handleSubmit}>
          <Text>CREATE</Text>
        </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreatePost