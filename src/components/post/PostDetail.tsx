import React,{useCallback, useEffect, useMemo, useContext, useState} from 'react';
import {View} from 'react-native';
import { getPostDetails } from '../../services/post/PostService';
import UserContext from '../../Context';
import PostDetailCard from './PostDetailCard';

type PostId = {
    postId: string
}

const PostDetail = (postId: PostId) => {
    
    const context = useContext(UserContext);
    const [postDetails, setPostDetails] = useState<any>();

    const getPost = useCallback(async ()  => {
        let newPosts = await getPostDetails(postId.postId, context.user.token)
        setPostDetails(newPosts);
    }, [])

    useEffect(() => {
        getPost();
    }, [getPost])

    return(
        <View>
            <PostDetailCard {...postDetails}/>
        </View>
    )
}

export default PostDetail