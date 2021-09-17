import React from 'react';
import {View, Text} from 'react-native';

interface Answer {
    answerId: string,
    username: string,
    text:string,
    createdOn: Date,
}

const AnswerCard = (answer: Answer) => {
    
    return(
        <View>
            <Text>{answer.username}</Text>
            <Text>{answer.text}</Text>
            <Text>{answer.createdOn}</Text>
        </View>
    )
   
}

export default AnswerCard