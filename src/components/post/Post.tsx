import React, {useState, useCallback, useMemo, useEffect, useContext } from 'react';
import {View, TouchableOpacity} from 'react-native';
import PostCard from './PostCard';
import { GetAllPosts } from '../../services/post/PostService';
import UserContext from '../../Context';

interface IProps {
    navigation: any,
    dataFromSearch: any[],
}

 const Post = (props: IProps) => {
    const context = useContext(UserContext);
    const [posts, setPosts] = useState<any[]>([]);

    const getPosts = useCallback(async ()  => {
        let newPosts = await GetAllPosts(context.user.token)
        setPosts(newPosts);
    }, [])

    function handleNavigation (destination: string, data: any) {
        props.navigation.push(destination, data);
    }
   
    const renderPost = useMemo(() => {
            return  posts.map(post => {
                return (
                    <View  key={post.postId}>
                        <TouchableOpacity  onPress={() => props.navigation.push('PostDetails', {...post})}>
                        <PostCard {...post} handleNavigation={handleNavigation}/>
                        </TouchableOpacity>
                    </View>
                )
            })
        
    }, [posts])

    useEffect(() => {
            getPosts()
    }, [getPosts])
    
    return(
        <View> 
            {renderPost}
        </View>
    );
}

export default Post

// Create a post and post card inside....