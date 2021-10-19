import React, {useContext, useState, useCallback, useMemo, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import UserContext from '../../Context';
import {getSubAnswersService, deleteSubAnswerService} from '../../services/subAnswer/SubAnswerService';
import SubAnswerCard from '../subAnswer/SubAnswerCard';

interface IProps {
    answerId: string,
}



//TODO: Fix this code. Now  you call getSubAnswers after positive resposne for deletign sub asnwer
// you must just change state after deleting. This will improve perfomance.
//Maybe some algorithm for this?s


const SubAnswer = (props: IProps) => {

    const context = useContext(UserContext);

    const [subAnswers, setSubAnswers] = useState<any[]>([]);

    const getSubAnswers = useCallback(async () => {
        let subAnswers = await getSubAnswersService(props.answerId, context.user.token)
            setSubAnswers(subAnswers)
    }, [])

    const renderSubAnswers = useMemo(() => {
        return subAnswers.map(subAnswer => {
            return (
                <View key={subAnswer.subAnswerId}>
                    <SubAnswerCard
                     {...subAnswer} 
                    currentUser={context.user.userName} 
                    currentUserToken={context.user.token}
                    getSubAnswers={getSubAnswers}/>
                </View>
            )
        })
    }, [subAnswers])

    useEffect(() => {
        getSubAnswers();
    }, [subAnswers.length])

    return(
        <View>
            {renderSubAnswers}
        </View>
    )

}


export default SubAnswer