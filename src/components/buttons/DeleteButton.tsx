import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface IDeleteButton {
    handleDelete: any,
    id: string
}

const DeleteButton = (props: IDeleteButton) => {

    return (
        <TouchableOpacity onPress={() => props.handleDelete(props.id)}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
    )
}

export default DeleteButton