import React, {useState} from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import { setCorrectAnswer } from '../../services/answer/AnswerService';

interface IProps {
    answerId: string,
    token:string
    handleAcceptedAnswer: any
}

const CorrectAnswer = (props: IProps) =>{


    const handleIsCorrectAnswer = async () => {
        const result = await setCorrectAnswer(props.answerId, props.token);
            if(result == "You accept the answer" || result == "You unaccept the answer") {
                props.handleAcceptedAnswer();
            }
    }

    return(
        <View>
        <TouchableOpacity onPress={handleIsCorrectAnswer}>
            <Text>Correct</Text>
        </TouchableOpacity>
    </View>
    )
    
}


export default CorrectAnswer