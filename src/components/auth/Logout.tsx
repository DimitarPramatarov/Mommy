import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import UserContext from '../../Context';
import AuthScreen from '../../screens/AuthScreen';

const Logout = () => {

    const context = useContext(UserContext)

    const handleLogout = () => {
        context.logOut();
    }

    useEffect(() => {
        handleLogout()
    })

    return (
        <View>
            <AuthScreen />
        </View>
    )
}



export default Logout