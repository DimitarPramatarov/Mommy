import React, {useState, useCallback, useMemo, useEffect, useContext } from 'react';
import {View} from 'react-native';
import PostCard from './PostCard';
import { GetAllPosts } from '../services/post/PostService';
import UserContext from '../Context';

interface Post {
    title: string,
    isAnswered: boolean,
    createdOn: Date,
    username: string,
    postId: string
}

 const Post = () => {
    const context = useContext(UserContext);
    const [posts, setPosts] = useState<Post[]>([]);
    
    const getPosts = useCallback(async () => {
        const newPosts =  GetAllPosts()
        console.log("posts from post" + newPosts);
        setPosts(posts);
    }, [])

    const renderPost = useMemo(() => {
        if(context.user == null)
        {
            return posts.map((post, index) => {
                return (
                    <View>
                        <PostCard key={index}  {...post}/>
                    </View>
                )
            })
        }
        
    }, posts)

    useEffect(() => {
        getPosts();
    }, [getPosts])
    
    return(
        <View>
            {renderPost}
        </View>
    );
}

export default Post

// Create a post and post card inside....