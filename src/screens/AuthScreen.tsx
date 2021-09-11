import React, {useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity,
   NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {login, register} from '../services/auth/AuthService';
import { useNavigation } from '@react-navigation/core';
import UserContext from '../Context';

const AuthScreen = () =>  {

    const navigation = useNavigation();
    const context = useContext(UserContext);

    const [isRegister, setIsRegister] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    const handleUsername = (event : NativeSyntheticEvent<TextInputChangeEventData>) : void => {
        setUsername(event.nativeEvent.text);
    }

    const handlePassword = (event : NativeSyntheticEvent<TextInputChangeEventData>) : void => {
        setPassword(event.nativeEvent.text);
    }

    const handleSubmit = async ()  => {

      if(isRegister)
        {
           let result =  register(username, email, password)
           if(result != null)
           {
            await setIsRegister(false);
           }

        } else {

           let user = await login(username, password)

           if(user != null)
           {
            context.login(user);
           }
        }
        
    }

    const handleEmail = (event : NativeSyntheticEvent<TextInputChangeEventData>) : void => {
      setEmail(event.nativeEvent.text);
  }

    const handleIsRegsiter = () : void => {
        setIsRegister(!isRegister);
    }

    if(isRegister == true) {
      return (
        <View style={styles.container}>
        <Text style={styles.logo}>Mommy</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChange={handleUsername}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChange={handleEmail}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChange={handlePassword}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
          <Text style={styles.loginText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIsRegsiter}>
          <Text style={styles.loginText}>SignIn</Text>
        </TouchableOpacity>
      </View>

    ) 
  } else {
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Mommy</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Username..." 
          placeholderTextColor="#003f5c"
          onChange={handleUsername}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChange={handlePassword}/>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleIsRegsiter}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  ) 
  }

    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"white",
      fontSize:11
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white"
    }
  });

export default AuthScreen
