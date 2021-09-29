import React, {useContext, useState} from 'react';
import {View, Text, TextInput,TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {createAnswerService} from '../../services/answer/AnswerService';
import UserContext from '../../Context';

interface IAnswer {
    postId: string,
}

const CreateAnswer = (answer: IAnswer) => {

    const context = useContext(UserContext)
    const [description, setDescription] = useState("");

    const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setDescription(e.nativeEvent.text);
    }

    const handleCreateAnswer = async () => {
        let result = await createAnswerService(answer.postId, description, context.user.token);

        console.log(result);
    }

    return (
        <View>
            <TextInput 
            placeholder="Answer..."
            onChange={handleChange}
            />
            <View> 
                <TouchableOpacity onPress={handleCreateAnswer}>
                <Text>Create Answer</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}


export default CreateAnswer