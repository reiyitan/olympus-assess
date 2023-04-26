import React from "react";
import { Text, TextInput } from "react-native";

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
        <>
            <Text
                className="color-border"
                style={{
                    width: "85%",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
            >
                {placeholder}
            </Text>
            <TextInput 
                className="h-8 border-border border-b-2 mt-1 mb-5 color-gold"
                secureTextEntry={secure}
                value={text}
                placeholderTextColor="#4C566A"
                onChangeText={setText}
                textAlign="left"
                style={{
                    width: "85%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: 5
                }}
            />
        </>
    );
}