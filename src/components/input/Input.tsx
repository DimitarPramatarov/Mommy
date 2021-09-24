import React from 'react';
import {TextInput} from 'react-native';

interface IInput {
    placeholder: string,
    value: string,
    onChange: any,
    placeHolderColor: string,
    style: []
}

const Input = (input: IInput) => {
    
    return(
        <TextInput 
            placeholder={input.placeholder}
            value={input.value}
            placeholderTextColor={input.placeHolderColor}
            onChange={input.onChange}
            style={input.style}
        />
    )
}


export default Input;