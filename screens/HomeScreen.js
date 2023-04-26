import React from "react";
import { View, Text } from "react-native"; 
import { Exercise } from "../components";

/**
 * Provides user a section to enter information for 3 sets
 * of an exercise. 
 * 
 * @param route - route.params provides parameters passed through the stack navigator.
 */
export const HomeScreen = ({route}) => {
    const { email } = route.params; //TODO replace with name

    return (
        <View
            style={{
                top: "7.5%",
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                flex: 1
            }}
        >
            <Text
                className="mb-5"
                style={{
                    color: "white",
                    fontSize: 20
                }}
            >
                Hi, {email}
            </Text>
            <Exercise />
        </View>
    );
}