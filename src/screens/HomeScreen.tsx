import React,{useState, useEffect} from 'react';
import Post from '../components/post/Post';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native'
import { RootStackScreenProps } from '../../types';
import Logout from '../components/auth/Logout';
import SearchBar from '../components/search/SearchBar';

const HomeScreen = ({navigation} : RootStackScreenProps<"HomeScreen">) => {

    const [searchResult, setSearchResult] = useState<any[]>([]);

    const handleSearchResult = async (searchData: any[]) => {
        await setSearchResult(searchData)
    }

    useEffect(() => {
        handleSearchResult
        
    }, [searchResult])


    const createPost = () => {
        navigation.navigate("CreatePost");
    }

    const myProfile = () => {
        navigation.navigate("MyProfile");
    }

    return(
        <ScrollView>
            <SearchBar handleSearchResult={handleSearchResult}/>
            <TouchableOpacity onPress={createPost}>
                <Text>CreatePost</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={myProfile}>
                <Text>MyProfile</Text>
                </TouchableOpacity>
                <View>
                    <Logout />
                </View>
        <View>
            <Post dataFromSearch={searchResult} navigation={navigation}/>
        </View>
        </ScrollView>
    )
}

export default HomeScreen

