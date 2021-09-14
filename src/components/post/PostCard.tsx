import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export interface Post {
    postId: string
    title: string,
    createdOn: Date,
    username: string,
    isAnswered: boolean,
}

const PostCard = (post: Post)=> {
return(
    <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text> 
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
    }
})

export default PostCard

// Fix this post card