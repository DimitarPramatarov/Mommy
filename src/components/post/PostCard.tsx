import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export interface IProps {
    postId: string
    title: string,
    createdOn: Date,
    username: string,
    isAnswered: boolean,
    handleNavigation: Function,
}


const PostCard = ( props: IProps) => {
   
    return(
        <View >
        <View>
            <View >
        <View>
            <View >
                <View >
                <Text>PIC</Text>
                </View>
            </View>
            <View>
            <View>
                <TouchableOpacity onPress={() => props.handleNavigation("ProfileScreen", props.username)}>
                    <Text>{props.username}</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        <View> 
            <View>
            </View>
        </View>
            </View>
        </View>
        <View>
            <View >
                <Text >{props.title}</Text> 
        <View>
            <Text>{props.isAnswered}</Text>
        </View>
    </View>
    <View>
    </View>
</View>
        </View>
);
}
const styles = StyleSheet.create({
    post: {
        backgroundColor: '#fff',
        fontSize: 1,
        borderRadius: 0.75,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        position: 'relative',
        margin: '0.75rem',
        padding: 0.75,
    },
    paddingNav: {
        padding: 0.75,
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    postTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.75rem',
    },
    meta: {
        display:'flex',
        alignItems: 'center',
        lineHeight: 1.25,
        fontSize: 0.875,
    },
    authorPic: {
        position: 'relative',
        marginRight: '0.5rem',
    },
    avatar: {
        width: '2rem',
        height: '2rem',
    }
})


export default PostCard

// Fix this post card