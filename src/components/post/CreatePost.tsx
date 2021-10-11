import React, {useState, useContext} from 'react';
import {StyleSheet, TextInput, Text, View, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity } from 'react-native'
import { RootStackScreenProps } from '../../../types';
import UserContext from '../../Context';
import {addPost} from '../../services/post/PostService';

const CreatePost = (navigation: any) => {
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
            <View style={style.top}>
            <Text>New Article</Text>
            </View> 
            <View style={style.download}>
            </View>
            <View>
           <View>
            <TextInput
            style={style.title}
                placeholder="Your title..."
                value={title}
                onChange={hadnleTitle}
                />
                <View style={style.line}></View>
                </View>
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
const style = StyleSheet.create({
    top: {
        position: "absolute",
        width: 375,
        height: 101,
        top: 0,
        left: 0,

    },
    newArticle: {
        width:133,
        height: 33,
        top: 68,
        left: 40,
    },
    download: {
        position: "absolute",
        width: 32,
        height: 32,
        left: 383,
        top: 68,
    },
    title:{
        position: "absolute",
        width: 295,
        height:37,
        left:40,
        top:140,
    },
    line:{
        position: 'absolute',
        left: '10.67%',
        right: '10.65%',
        top: '21.43%',
        bottom: '78.2%'
    },
    correctAnswer: {
        backgroundColor: "#00ff00"
    }
});

export default CreatePost