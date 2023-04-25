import React from "react"; 
import { Text, TouchableOpacity } from "react-native"; 

export const TouchButton = ({text, handlePress}) => {
    return (
        <TouchableOpacity 
            className="bg-white rounded-full mt-5 mx-5 h-16"
            onPress={handlePress}
            style={{
                alignContent: "center",
                width: "90%"
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