import React, {useState, useCallback, useMemo, useEffect, useContext } from 'react';
import {View, TouchableOpacity} from 'react-native';
import PostCard from './PostCard';
//import { GetAllPosts } from '../../services/post/PostService';
import UserContext from '../../Context';

interface IProps {
    navigation: any,
    postService: Function,
    username: string,
}

 const UserPosts = (props: IProps) => {
    const context = useContext(UserContext);
    const [posts, setPosts] = useState<any[]>([]);

    const getPosts = useCallback(async ()  => {
        let newPosts = await props.postService(context.user.token, props.username)
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
    }, [posts])
    
    return(
        <View> 
            {renderPost}
        </View>
    );
}

export default UserPosts

// Create a post and post card inside....