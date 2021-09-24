import React, {useCallback, useContext, useState,useEffect, useMemo} from 'react';
import {View} from 'react-native';
import AnswerCard from './AnswerCard'
import {getAnswers} from '../../services/answer/AnswerService';
import UserContext from '../../Context';


type Props = {
    postId: string;
    username:string;
}

const Answer = (props: Props) => {
    const context = useContext(UserContext);
    const [answers, setAnswers ] = useState<any[]>([]);

    const currentUser = context.user;

    const getAnswersByPost = useCallback(async () => {
        let answers = await  getAnswers(props.postId, currentUser.token)
        setAnswers(answers);
    }, [])

    const renderAnswers = useMemo(() => {
        return  answers.map(answer => {
            return (
                <View key={answer.answerId}>
                    <AnswerCard {...answer} currentUser={currentUser.userName} userToken={currentUser.token} postOwner={props.username}/>
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