import axios from 'axios';
import { searchUrl } from '../../constants/HttpCalls';

export const searchService = async (search: string, token: string) : Promise<any[]> => {

    let result = await axios.post<any[]>(searchUrl, {
        description: search
    },
    {
        headers: {"Authorization": `Bearer ${token}`}
    })

    provideSearchResultService(result); 

    let arr = [];

    for (let i = 0; i < result.data.length; i++) {
        const element = result.data[i];

        arr.push(element)
        
    }
    return arr;
    
}

export const provideSearchResultService = (searchResult: any) => {

    return searchResult;
}


const SearchService = {
    searchService,
    provideSearchResultService,
}

export default SearchService