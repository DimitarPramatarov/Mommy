import React from 'react';
import Post from '../components/post/Post';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native'
import { RootStackScreenProps } from '../../types';

const HomeScreen = ({navigation} : RootStackScreenProps<"HomeScreen">) => {

    const createPost = () => {
        navigation.navigate("CreatePost");
    }

    return(
        <ScrollView>
            <TouchableOpacity onPress={createPost}>
                <Text>CreatePost</Text>
                </TouchableOpacity>
        <View>
            <Post {...navigation}/>
        </View>
        </ScrollView>
    )
}

export default HomeScreen

