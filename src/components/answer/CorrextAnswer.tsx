import React from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import { setCorrectAnswer } from '../../services/answer/AnswerService';

interface IProps {
    answerId: string,
    token:string
}

const CorrectAnswer = (props: IProps) =>{

    const handleIsCorrectAnswer = async () =>{
        const result = await setCorrectAnswer(props.answerId, props.token);
        console.log("this is result from CorrectAnswer")
        console.log(result);

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