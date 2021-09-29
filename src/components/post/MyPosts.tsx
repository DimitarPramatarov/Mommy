import React, {useEffect, useCallback, useMemo, useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PostCard from './PostCard';
import {getMyPosts, deletePost} from '../../services/post/PostService';
import UserContext from '../../Context';
import DeleteButton from '../buttons/DeleteButton';

const MyPosts = (navigation: any) => {
    const context = useContext(UserContext);
    const [posts, setMyPosts ] = useState<any[]>([])

    const myPosts = useCallback(async () => {
        let myPosts = await getMyPosts(context.user.token);
        if(myPosts != null){
            setMyPosts(myPosts);
        }
    }, [])

    const handleDeleteMyPost = async (postId: string) => {
        await deletePost(context.user.token, postId);
    }

    const handleNavigation = (destination: string, data: object) => {
        navigation.push(destination, data);
    }

    const renderMyPosts = useMemo(() => {
        return posts.map(post => {
            return (
                <View key={post.postId}>
                    <TouchableOpacity  onPress={() => navigation.push('PostDetails', {...post})}>
                    <PostCard {...post} handleNavigation={handleNavigation}/>
                    </TouchableOpacity>
                    <DeleteButton handleDelete={handleDeleteMyPost} id={post.postId}/>
                </View>
            )
        })
    }, [posts])


    useEffect(() => {
        myPosts()
    }, [myPosts.length])

    return (
        <View>
            {renderMyPosts}
        </View>
    )
}


export default MyPosts