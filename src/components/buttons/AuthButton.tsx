import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface IAuthButton {
  handleFunction: any,
  buttonName: string,
}

const AuthButton =  (props: IAuthButton) => {
    return(
        <TouchableOpacity onPress={props.handleFunction} style={styles.Btn}>
        <Text style={styles.textColor}>{props.buttonName}</Text>
      </TouchableOpacity>
    )

}

export default AuthButton;

const styles = StyleSheet.create({
    Btn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      textColor:{
        color: "white"
      }
      
})


