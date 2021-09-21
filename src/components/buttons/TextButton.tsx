import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface ITextButton {
    handleFunction: any,
    buttonName: string,
  }
  
  const TextButton = (props: ITextButton) => {
    return(
        <TouchableOpacity onPress={props.handleFunction}>
          <Text style={styles.textColor}>{props.buttonName}</Text>
        </TouchableOpacity>
    )
      
  }

export default TextButton;

const styles = StyleSheet.create({
    
      textColor:{
        color: "white"
      }
      
})


