import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import {login, register} from '../services/auth/AuthService';
import UserContext from '../Context';
import AuthButton from '../components/buttons/AuthButton';
import TextButton from '../components/buttons/TextButton';

import {Controller, useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const authSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().notRequired()
}).required();

const AuthScreen = () =>  {
  
    const context = useContext(UserContext);
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(authSchema)
    });
   
      const handleIsRegsiter = () : void => {
        setIsRegister(!isRegister);
    }
    
  const onSubmit = handleSubmit(async (data) : Promise<void> => {
    if(isRegister) {
      let result =  register(data.username, data.email, data.password)
      if(result != null)
      {
        await setIsRegister(false);
      }
      
    } else {
      
      let user = await login(data.username, data.password)
      
      if(user != null)
      {
        context.login(user);
      }
    }

  })

    if(isRegister == true) {
      return (
        <View style={styles.container}>
        <Text style={styles.logo}>Mommy</Text>
        <View style={styles.inputView} >
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            onBlur={onBlur}
            value={value}
            placeholderTextColor="#003f5c"
            onChangeText={onChange}/>
        )}
        name="username"
        defaultValue=""
      />
        {errors.username && <Text>Username is required!</Text>}
        </View>
        <View style={styles.inputView} >
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  
          style={styles.inputText}
          onBlur={onBlur}
          placeholder="Email..." 
          value={value}
          placeholderTextColor="#003f5c"
          onChangeText={onChange}/>
        )}
        name="email"
        defaultValue=""
      />
        {errors.email && <Text>Email is required!</Text>}
        </View>
        <View style={styles.inputView} >
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            onBlur={onBlur}
            placeholder="Password..." 
            value={value}
            placeholderTextColor="#003f5c"
            onChangeText={onChange}/>
        )}
        name="password"
        defaultValue=""
      />
        {errors.password && <Text>Password is required!</Text>}
          
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <AuthButton buttonName={"REGISTER"} handleFunction={onSubmit}/>
        <TextButton buttonName={"SignIn"} handleFunction={handleIsRegsiter}/>
      </View>

    ) 
  } else {
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Mommy</Text>
      <View style={styles.inputView} >
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            style={styles.inputText}
            placeholder="Username..." 
            onBlur={onBlur}
            value={value}
            placeholderTextColor="#003f5c"
            onChangeText={onChange}/>
        )}
        name="username"
        defaultValue=""
      />
        {errors.username && <Text>Username is required!</Text>}
      </View>
      <View style={styles.inputView} >
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            onBlur={onBlur}
            value={value}
            placeholderTextColor="#003f5c"
            onChangeText={onChange}/>
        )}
        name="password"
        defaultValue=""
      />
        {errors.password && <Text>Password is required!</Text>}
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <AuthButton buttonName={"LOGIN"} handleFunction={onSubmit}/>
      <TextButton buttonName={"SignUp"} handleFunction={handleIsRegsiter}/>
    </View>
  ) 
  }

    
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
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
