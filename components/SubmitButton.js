import React from "react"; 
import { Text, TouchableOpacity } from "react-native"; 

/**
 * A custom button component.
 * 
 * @param text - The text to be displayed on the button .
 * @param handlePress - Callback function that is called on button press.
 */
export const SubmitButton = ({text, handlePress}) => {
    return (
        <TouchableOpacity 
            className="bg-white rounded-full mt-5 mx-5 h-16"
            onPress={handlePress}
            style={{
                alignContent: "center",
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#E6C466"
            }}
        >
            <Text
                style={{
                    textAlign: "center",
                    top: "50%", 
                    transform: [
                        {translateY: -8}
                    ]
                }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    ); 
}