import axios from 'axios';
import { getTotalVotesUrl, plusVoteUrl, minusVoteUrl } from '../../constants/HttpCalls';

export const plusVoteService = async (token: string,id: string) =>{
    let result = await axios.post(plusVoteUrl, {
        id: id,
    },
    {
    headers:{"Authorization" : `Bearer ${token}`}
    })

    return result.data;
}

export const minusVoteService = async (token: string,id: string) => {
    let result = await axios.post(minusVoteUrl, {
        id: id,
    },
    {
    headers:{"Authorization" : `Bearer ${token}`}
    })

    return result.data;
} 


export const getTotalVotesService = async (token: string,id: string) => {

    let result = await axios.get(getTotalVotesUrl, {
        params: {
            id:id
          },
          headers:{"Authorization": `Bearer ${token}`}
        })
    return result.data;
    
}


const VoteService = {
    plusVoteService,
    minusVoteService,
    getTotalVotesService
}



export default VoteService