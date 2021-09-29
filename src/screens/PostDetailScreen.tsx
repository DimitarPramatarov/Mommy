import React from 'react';
import {View,Text} from 'react-native';
import PostDetail from '../components/post/PostDetail';
import { RootStackScreenProps } from '../../types';
import Answer from '../components/answer/Asnwer';
import CreateAnswer from '../components/answer/CreateAnswer';

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
            <Answer {...props.route.params}/>
        </View>
            <CreateAnswer postId={postId} />
        </View>
    )
    
}

export default PostDetailScreen