import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import UserContext from '../../Context';



const Logout = () => {
    
    const context = useContext(UserContext)

    const handleLogout = () => {
        
         context.logOut();
    }

    return(
        <View>
        {handleLogout}
        </View>
    )
}



export default Logout