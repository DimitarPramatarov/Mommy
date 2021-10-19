import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DeleteButton from '../buttons/DeleteButton';
import UpdateSubAnswer from './UpdateSubAnswer';
import {deleteSubAnswerService, updateSubAnswerService} from '../../services/subAnswer/SubAnswerService';

//TODO: Add delete answer and update answer functionality.

interface IProps {
    createdBy: string,
    subAnswerId: string,
    description: string,
    createdOn: string,
    currentUser: string,
    currentUserToken: string,
    getSubAnswers: Function,
}

const SubAnswerCard = (props: IProps) => {

    const handleDelete = async () => {
        let result = await deleteSubAnswerService(props.subAnswerId, props.currentUserToken)

        if(result == true){
            await props.getSubAnswers()
        }
    }


    return(
        <View style={style.container}>
            <Text>{props.createdBy}</Text>
            <Text>{props.description}</Text>
            <Text>{props.createdOn}</Text>
            <View>
                {props.createdBy == props.currentUser ? 
                <View>
                <DeleteButton handleDelete={handleDelete} id={props.subAnswerId}/>
                <UpdateSubAnswer {...props}/>
                </View>
                : null}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderRadius: 0.75,
        borderColor: "#FF000000"
    },
});


export default SubAnswerCard