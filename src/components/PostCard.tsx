import React, { useEffect } from 'react';
import {View, Text} from 'react-native';

const PostCard = (title: string, isAnswered: string, createdOn: Date, username: string)=> {

return(
    <View>
        <Text>{title}</Text> 
        <View>
            <Text>{isAnswered}</Text>
        </View>
        <View>
            <Text>{createdOn}</Text>
        </View>
        <View>
            <Text>{username}</Text>
        </View>
    </View>
);
}

export default PostCard

// Fix this post card