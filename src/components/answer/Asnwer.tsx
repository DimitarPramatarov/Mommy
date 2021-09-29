import React, {useCallback, useContext, useState,useEffect, useMemo} from 'react';
import {View} from 'react-native';
import AnswerCard from './AnswerCard'
import {getAnswers, deleteAnswerService} from '../../services/answer/AnswerService';
import UserContext from '../../Context';
import DeleteButton from '../buttons/DeleteButton';


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

    const handleDelete = async (answerId: string) => {
        let result = await deleteAnswerService(answerId, currentUser.token)
    }

    const renderAnswers = useMemo(() => {
        return  answers.map(answer => {
            return (
                <View key={answer.answerId}>
                    <AnswerCard {...answer} currentUser={currentUser.userName} userToken={currentUser.token} postOwner={props.username}/>
                    {currentUser.userName == answer.username ? <DeleteButton handleDelete={handleDelete} id={answer.answerId}/> : null}
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