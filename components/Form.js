import React from "react";
import { TextInput } from "react-native";

/**
 * Component for getting user input. 
 * 
 * @param text - A state variable. Replaces the value of the TextInput. 
 * @param setText - Updates state of text when a user types in the TextInput. 
 * @param secure - True if text should be hidden, false otherwise. 
 * @param placeholder - Placeholder text for the form. 
 */
export const Form = ({text, setText, secure, placeholder}) => {
    return (
        <TextInput 
            className="h-16 bg-input border-border mt-5 rounded-full color-gold"
            secureTextEntry={secure}
            value={text}
            placeholder={placeholder}
            placeholderTextColor="#4C566A"
            onChangeText={setText}
            textAlign="left"
            style={{
                paddingLeft: 30,
                width: "95%"
            }}
        />
    );
}