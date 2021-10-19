import React,  {useState} from 'react';
import {View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {updateSubAnswerService} from '../../services/subAnswer/SubAnswerService';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps{
    description: string,
    subAnswerId: string,
    currentUserToken: string,
}


const UpdateSubAnswer = (props: IProps) => {

    const [description, setDescription] = useState(props.description)
    const [isUpdate, setIsUpdate] = useState<boolean>(false);


    const handleIsUpdate = () => {
        setIsUpdate(true);
    }

    const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setDescription(event.nativeEvent.text)
    }

    const handleUpdate = async () => {

        let result = await updateSubAnswerService(props.subAnswerId, description, props.currentUserToken);

        if(result == true){
            setIsUpdate(false);
        }
    }
    
    return(
        <View>
            {isUpdate ? 
                       <View>
                       <TextInput value={description} onChange={handleChange}/>
                       <TouchableOpacity onPress={handleUpdate}>
                       <Text>Save Update</Text>
                       </TouchableOpacity>
                       </View>    
                 : 
              
                 <View>
                 <TouchableOpacity onPress={handleIsUpdate}>
                 <Text>Update</Text>
                 </TouchableOpacity> 
                  </View>
                }
         </View>
           
            
    )
}


export default UpdateSubAnswer