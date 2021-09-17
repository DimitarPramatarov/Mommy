import React from 'react';
import Post from '../components/post/Post';
import {View, ScrollView, TouchableOpacity} from 'react-native'
import { RootStackScreenProps } from '../../types';

const HomeScreen = ({navigation} : RootStackScreenProps<"HomeScreen">) => {

    const createPost = () => {
        navigation.navigate("CreatePost");
    }

    return(
        <ScrollView>
            <View>
                <TouchableOpacity onPress={createPost}>
                    CreatePost
                </TouchableOpacity>
            </View>
        <View>
            <Post {...navigation}/>
        </View>
        </ScrollView>
    )
}

export default HomeScreen

