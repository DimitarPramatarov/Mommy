import axios from 'axios';
import { createSubAnswerUrl, getSubAnswersUrl, deleteSubAnswerUrl, updateSubAnswerUrl } from '../../constants/HttpCalls';


export const createSubAnswerService = async (answerId: string, description: string, token: string,) =>{
   
    let result = await axios.post(createSubAnswerUrl, {
        description: description,
        answerId: answerId,
        
    },
    {
        headers: {"Authorization" : `Bearer ${token}`}
    })
    return result.data;
}

export const getSubAnswersService = async (answerId: string, token: string) => {
    
    let result = await axios.get(getSubAnswersUrl, {
        params : {
            answerId: answerId
        },
        headers: {"Authorization" : `Bearer ${token}`}
    })
    return result.data
}

export const updateSubAnswerService = async (subAnswerId: string, description: string, token: string) => {

    let result = await axios.put(updateSubAnswerUrl, {
        id: subAnswerId,
        description: description,
    },
    {
        headers: {"Authorization" : `Bearer ${token}`}
    })
    
    console.log(result)
    return result.data
}

export const deleteSubAnswerService = async (subAnswerId: string, token: string) => {
    let result = await axios.post(deleteSubAnswerUrl, {
        Id: subAnswerId
    },
    {
        headers: {"Authorization" : `Bearer ${token}`}

    })

    return result.data
}

const SubAnswerService = {
    createSubAnswerService,
    getSubAnswersService,
    updateSubAnswerService,
    deleteSubAnswerService,
}



export default SubAnswerService