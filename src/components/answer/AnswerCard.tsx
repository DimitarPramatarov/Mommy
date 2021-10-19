import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CorrectAnswer from '../answer/CorrextAnswer';
import CreateSubAnswer from '../subAnswer/CreateSubAnswer';
import SubAnswer from '../subAnswer/SubAnswer';

interface IProps {
    answerId: string,
    username: string,
    userToken: string,
    text:string,
    createdOn: Date,
    isCorrectAnswer: boolean,
    postOwner: string,
    token: string,
    currentUser: string,
}



const AnswerCard = (props: IProps) => {

    const [isAnswered, setIsCorrectAnswerd] = useState(props.isCorrectAnswer)
    
    const handleAcceptedAnswer = () => {
        setIsCorrectAnswerd(!isAnswered);
    }
    
    return(
        <View >
            <View style={
            isAnswered == true ? style.correctAnswer : null    
        }>
            <Text>{props.username}</Text>
            <Text>{props.text}</Text>
            <Text>{props.createdOn}</Text>
            </View>
            {props.postOwner == props.currentUser ? 
                <View>
                <CorrectAnswer token={props.userToken} answerId={props.answerId} handleAcceptedAnswer={handleAcceptedAnswer}/>
            </View>
            : null}
            <View>
                <CreateSubAnswer answerId={props.answerId}/>
            </View>
            <View>
            <SubAnswer answerId={props.answerId}/>
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        position: "relative",
        width: 295,
        height: 141,
        left: 40,
      top: 550,

    },
    correctAnswer: {
        backgroundColor: "#00ff00"
    }
});

export default AnswerCard