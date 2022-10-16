import React,{useState, useEffect} from 'react';
import Post from '../components/post/Post';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native'
import { RootStackScreenProps } from '../../types';
import Logout from '../components/auth/Logout';
import SearchBar from '../components/search/SearchBar';
import { DrawerActions } from '@react-navigation/routers';



const HomeScreen = ({navigation} : RootStackScreenProps<"Home">) => {

    const [searchResult, setSearchResult] = useState<any[]>([]);

     const handleSearchResult = async (searchData: any[]) => {
        await setSearchResult(searchData)
    }
    

    useEffect(() => {
        handleSearchResult
        
    }, [searchResult])
    return(
        <ScrollView>
        <View>
            <Post dataFromSearch={searchResult} navigation={navigation}/>
        </View>
        </ScrollView>
    )
}

export default HomeScreen

