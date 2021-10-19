import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import UserContext from '../../Context';
import { createSubAnswerService } from '../../services/subAnswer/SubAnswerService';

interface IProps {
    answerId: string,
}


const CreateSubAnswer = (props: IProps) => {

    const [description, setSubAnswer] = useState("");
    const [isReply, setIsReply] = useState(false);
    const context = useContext(UserContext);
    
    const handleSubAnswer = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {

        setSubAnswer(e.nativeEvent.text);
    }

    const handleSubmit = async () => {
        handleIsReply();
        let result = await createSubAnswerService(props.answerId, description, context.user.token)

        console.log(result);
    }

    const handleIsReply = () => {
        setIsReply(!isReply)
    }

    return(
        <View>
            {isReply == true ?
             <View>
            <TextInput onChange={handleSubAnswer}/>
            <TouchableOpacity onPress={handleSubmit}><Text>Submit</Text></TouchableOpacity>
            </View> 
            : <TouchableOpacity onPress={handleIsReply}><Text>Reply</Text></TouchableOpacity>
        }
        </View>
    )
}

export default CreateSubAnswer