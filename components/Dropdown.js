import React from "react"; 
import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const tags = ["Warmup", "Working set", "Drop set", "Burnout", "Max Attempt", "Assisted", "Negatives"];
const colors = ["#FF6565", "#FFA34E", "#B5E191", "#54BE98", "#4180CA", "#9B61E4", "#D05ECC"]

/**
 * Component for creating a dropdown menu. 
 * 
 * @param width - The width of the component.
 */
export const Dropdown = ({width}) => {
    const [tag, setTag] = useState("None");
    return (
        <TouchableOpacity
            onPress={()=>console.log("aksnd")}
            style={{width: width}}
        >
            <View //container
                className="mb-2 mt-1"
                style={{
                    paddingLeft: 5,
                    paddingRight: 5
                }}
            >
                <View //underline
                    style={{
                        backgroundColor: "#232329",
                        padding: 5,
                        borderRadius: 5
                    }}
                >
                    <View
                        style={{
                            borderBottomWidth: 1,
                            borderColor: "#8D8D9C"
                        }}
                    >
                        <Text
                            style={{
                                width: "100%",
                                textAlign: "center",
                                color: "#8D8D9C",
                                top: 4,
                                height: 24.2
                            }}
                        >{tag}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );  
}