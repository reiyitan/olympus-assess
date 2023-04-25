import React from "react";
import { TextInput } from "react-native";

export const Form = ({text, setText, placeholder}) => {

    return (
        <TextInput 
            className="h-16 bg-input border-border mx-5 mt-5 rounded-full color-gold"
            value={text}
            placeholder={placeholder}
            placeholderTextColor="#4C566A"
            onChangeText={setText}
            textAlign="center"
        />
    );
}