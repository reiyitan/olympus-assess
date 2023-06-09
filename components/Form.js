import React from "react";
import { View, Text, TextInput } from "react-native";

/**
 * Component for getting user input. 
 * 
 * @param text - A state variable. Replaces the value of the TextInput. 
 * @param setText - Updates state of text when a user types in the TextInput. 
 * @param secure - True if text should be hidden, false otherwise. 
 * @param label - Label for the form. Appears as text above the input.
 * @param width - The desired Form width.
 * @param bgColor - Hex code specifying the background color for the TextInput.
 * @param textColor - Hex code specifying color of text.
 * @param inputType - Specifies input type for the TextInput. 
 * @param center - True if TextInput text should be centered.
 */
export const Form = ({
    text, 
    setText, 
    secure, 
    label, 
    width, 
    bgColor,
    textColor,
    inputType,
    center
}) => {
    return (
        <View
            className="mb-2 mt-1"
            style={{
                width: width,
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: 5,
                paddingRight: 5
            }}
        >
            {label && <Text
                className="color-border mb-1"
                style={{
                    width: "100%",
                    textAlign: "left",
                    paddingLeft: 0
                }}
            >
                {label}
            </Text>}
            <View
                style={{
                    backgroundColor: bgColor ? bgColor : null,
                    padding: bgColor ? 5 : 0,
                    borderRadius: 5
                }}
            >
                <TextInput 
                    className="border-border"
                    secureTextEntry={secure ? secure : false}
                    value={text}
                    onChangeText={setText}
                    textAlign={center ? "center" : "left"}
                    style={{
                        width: "100%",
                        paddingLeft: 5,
                        paddingRight: 5,
                        borderBottomWidth: 1,
                        color: textColor ? textColor : "#E6C466",
                        textAlign: center ? "center" : "left",
                        height: 25
                    }}
                    keyboardType={inputType ? inputType : "default"}
                />
            </View>  
        </View>
    );
}