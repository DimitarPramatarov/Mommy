import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity} from 'react-native';
import {updatePost} from '../../services/post/PostService';
import UserContext from '../../Context';
import Vote from '../votes/Vote';


interface Post {
    postId: string
    title: string,
    createdOn: Date,
    username: string,
    description: string,
    isAnswered: boolean,
}

const PostDetailCard = (post: Post) => {

    const context = useContext(UserContext);
    const [isEdit, setEdit] = useState<boolean>(false)
    const [editedDescription, editDescription] = useState("");
    const [currentPost, changePost] = useState(post);
    
    useEffect(() => {
        changePost(post);
    }, [post]);

    const handleIsEdit = () => {
        setEdit(true);
    }

    const handleSaveEdit = async () => {
        const result = await updatePost(context.user.token, currentPost.postId, editedDescription)
        if(result == true) {
            setEdit(false)
            changePost({
                ...currentPost,
                description: editedDescription
            })
        }
    }

    const handleEditDescription = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        editDescription(event.nativeEvent.text);
    }

    return(
        <View>
            <View>
            <Text>
                {currentPost.title}
            </Text>
            </View>
            <View>
            <Text>
                {currentPost.username}
            </Text>
            </View>
            <View>
            <Text>
                {currentPost.createdOn}
            </Text>
            </View>
            <View>
            <Text>
                {currentPost.description}
            </Text>
            <View>
             {isEdit ? <View>
                <TextInput
                placeholder={post.description}
                onChange={handleEditDescription}
                />
                <TouchableOpacity onPress={handleSaveEdit}>
                    <Text>Save edit</Text>
                </TouchableOpacity>
            </View> : null}
            {context.user.userName == currentPost.username ? 
             <TouchableOpacity onPress={handleIsEdit}>
            <Text>Edit</Text> 
            </TouchableOpacity> : null}
            </View>
            <View>
            <View>
            <Vote id={post.postId}/>
            </View>
            </View>
            </View>
        </View>
    )
}


export default PostDetailCard