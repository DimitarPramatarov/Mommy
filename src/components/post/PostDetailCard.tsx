import React from 'react';
import {View, Text} from 'react-native';

interface Post {
    postId: string
    title: string,
    createdOn: Date,
    username: string,
    description: string,
    isAnswered: boolean,
}

const PostDetailCard = (post: Post) => {
    return(
        <View>
            <View>
            <Text>
                {post.title}
            </Text>
            </View>
            <View>
            <Text>
                {post.username}
            </Text>
            </View>
            <View>
            <Text>
                {post.createdOn}
            </Text>
            </View>
            <View>
            <Text>
                {post.description}
            </Text>
            </View>
        </View>
    )
}


export default PostDetailCard