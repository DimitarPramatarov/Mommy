import React from 'react';
import {View,Text} from 'react-native'
import PostDetail from '../components/post/PostDetail'
import { RootStackScreenProps } from '../../types';
import Answer from '../components/answer/Asnwer'

type Props = {
   route: any
}

const PostDetailScreen = (props : Props, {navigation} : RootStackScreenProps<'PostDetails'>) => {

    const postId: string = props.route.params.postId;    
    return(
        <View>
            <Text>POST</Text>
        <PostDetail postId={postId}/>
        <Text>Answers</Text>
        <View>
            <Answer postId={postId}/>
        </View>
        </View>
    )
    
}

export default PostDetailScreen