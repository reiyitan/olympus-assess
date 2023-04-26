import React from "react";
import { Text, TextInput } from "react-native";

/**
 * Component for getting user input. 
 * 
 * @param text - A state variable. Replaces the value of the TextInput. 
 * @param setText - Updates state of text when a user types in the TextInput. 
 * @param secure - True if text should be hidden, false otherwise. 
 * @param label - Label for the form. Appears as text above the input.
 * @param width - The desired Form width.
 */
export const Form = ({text, setText, secure, label, width}) => {
    return (
        <>
            {
                label && <Text
                    className="color-border"
                    style={{
                        width: width,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    {label}
                </Text>
            }  
            <TextInput 
                className="h-8 border-border border-b-2 mt-1 mb-5 color-gold"
                secureTextEntry={secure}
                value={text}
                onChangeText={setText}
                textAlign="left"
                style={{
                    width: width,
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: 7.5
                }}
            />
        </>
    );
}