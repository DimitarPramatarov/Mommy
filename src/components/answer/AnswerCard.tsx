import React from 'react';
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
    console.log(answer.isCorrectAnswer);
    return(
        <View>
            <View style={
            answer.isCorrectAnswer == true ? style.correctAnswer : null    
        }>
            <Text>{answer.username}</Text>
            <Text>{answer.text}</Text>
            <Text>{answer.createdOn}</Text>
            </View>
            {props.postOwner == props.currentUser ? 
                <View>
                <CorrectAnswer token={answer.userToken} answerId={answer.answerId}/>
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