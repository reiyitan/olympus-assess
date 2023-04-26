import React from "react";
import { Text } from "react-native"; 

/**
 * Component for displaying a warning message to the screen.
 * 
 * @param warning - A state variable. This is the warning message to be displayed.
 */
export const Warning = ({warning}) => {
    if (warning==="") return null;
    return (
        <Text
            className="mt-0"
            style={{
                color: "#FF6565",
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center"
            }}
        >
            {warning}
        </Text>
    );
}