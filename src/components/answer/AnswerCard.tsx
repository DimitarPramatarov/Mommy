import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CorrectAnswer from '../answer/CorrextAnswer'

interface IAnswer {
    answerId: string,
    username: string,
    userToken: string,
    text:string,
    createdOn: Date,
    isCorrectAnswer: boolean,
}

interface IProps {
    postOwner: string,
    token: string,
    currentUser: string,
}

const AnswerCard = (answer: IAnswer, props: IProps) => {

    const [isAnswered, setIsCorrectAnswerd] = useState(answer.isCorrectAnswer)
    
    const handleAcceptedAnswer = () => {
        setIsCorrectAnswerd(!isAnswered);
    }
    
    return(
        <View>
            <View style={
            isAnswered == true ? style.correctAnswer : null    
        }>
            <Text>{answer.username}</Text>
            <Text>{answer.text}</Text>
            <Text>{answer.createdOn}</Text>
            </View>
            {props.postOwner == props.currentUser ? 
                <View>
                <CorrectAnswer token={answer.userToken} answerId={answer.answerId} handleAcceptedAnswer={handleAcceptedAnswer}/>
            </View>
            : null}
            
        </View>
    )
}

const style = StyleSheet.create({
    correctAnswer: {
        backgroundColor: "#00ff00"
    }
});

export default AnswerCard