import React, { useEffect } from 'react';
import {View, Text} from 'react-native';


interface Post {
    title: string,
    isAnswered: boolean,
    createdOn: Date,
    username: string,
    postId: string
}

const PostCard = (post: Post)=> {

return(
    <View>
        <Text>{post.title}</Text> 
        <View>
            <Text>{post.isAnswered}</Text>
        </View>
        <View> 
            <Text>{post.createdOn}</Text>
        </View>
        <View>
            <Text>{post.username}</Text>
        </View>
    </View>
);
}

export default PostCard

// Fix this post card