import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import UserContext from '../../Context';
import { searchService } from '../../services/search/SearchService';

interface IProps {
    handleSearchResult: Function
}

const SearchBar = (props: IProps) => {
    
    const context = useContext(UserContext)
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState<any[]>([]);

    const handleChange =  async (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
         setSearch(e.nativeEvent.text);
   
        console.log(e.nativeEvent.text);
        console.log(search);
        if(search.length != 0){
            console.log("handleSearch")
             handleSearch();
        }
    }

    const sendNewData = () => {
        console.log(search.length)
        if(search.length == 1){
            setSearchData([])
            props.handleSearchResult(searchData)

        }
    }

    const handleSearch = async () => {
        let result = await searchService(search, context.user.token)

        if(result.length != 0) {
            setSearchData(result);
            props.handleSearchResult(searchData);
        }
    }

    return (
        <View>
            <TextInput
            placeholder="Search..."
            onChange={handleChange}        
            />
            <View>
            <TouchableOpacity onPress={handleSearch}>
                <Text>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchBar