import React, {useCallback, useContext, useState,useEffect, useMemo} from 'react';
import {View} from 'react-native';
import AnswerCard from './AnswerCard'
import {getAnswers} from '../../services/answer/AnswerService';
import UserContext from '../../Context';


type PostId = {
    postId: string;
}

const Answer = (postId: PostId) => {
    const context = useContext(UserContext);
    const [answers, setAnswers ] = useState<any[]>([]);

    const getAnswersByPost = useCallback(async () => {
        let answers = await  getAnswers(postId.postId, context.user.token)
        console.log(answers);
        setAnswers(answers);
    }, [])

    const renderAnswers = useMemo(() => {
        return  answers.map(answer => {
            return (
                <View key={answer.postId}>
                    <AnswerCard {...answer}/>
                </View>
            )
        })
    }, [answers])

    useEffect(() => {
        getAnswersByPost();
    }, [getAnswersByPost.length])

    return(
        <View>
            {renderAnswers}
        </View>
    )

}

export default Answer