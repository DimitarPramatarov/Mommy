import React, {useState, useCallback, useMemo, useEffect, useContext } from 'react';
import {View} from 'react-native';
import PostCard from './PostCard';
import { GetAllPosts } from '../../services/post/PostService';
import UserContext from '../../Context';

 const Post = () => {
    const context = useContext(UserContext);
    const [posts, setPosts] = useState<any[]>([]);
    

    const getPosts = useCallback(async ()  => {
        let newPosts = await GetAllPosts(context.user.token)
        setPosts(newPosts);
    }, [])

    const renderPost = useMemo(() => {
            return  posts.map(post => {
                return (
                    <View key={post.postId}>
                        <PostCard {...post}/>
                    </View>
                )
            })
        
    }, [posts])

    useEffect(() => {
        getPosts();
    }, [getPosts.length])
    
    return(
        <View>
            {renderPost}
        </View>
    );
}

export default Post

// Create a post and post card inside....