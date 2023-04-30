import React from "react"; 
import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const tags = [
    {name: "Warmup", color: "#FF6565"},
    {name: "Working Set", color: "#FFA34E"},
    {name: "Drop Set", color: "#B5E191"},
    {name: "Burnout", color: "#54BE98"},
    {name: "Max Attempt", color: "#4180CA"},
    {name: "Assisted", color: "#9B61E4"},
    {name: "Negatives", color: "#D05ECC"}
];

/**
 * Helper component for Dropdown. Represents one item in the dropdown menu.
 * 
 * @param name - The text to display on the element. 
 * @param color - The color of the element's marker. 
 * @param setTag - Set state of tag. Updates dropdown text.
 */
const DropdownItem = ({name, color, setTag}) => {
    return (
        <TouchableOpacity
            style={{
                display: "flex",
                height: 25,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start"
            }}
            onPress={() => setTag(name)}
        >
            <View 
                style={{
                    backgroundColor: color,
                    left: 5,
                    width: 1,
                    height: "55%",
                }}
            />
            <Text
                style={{
                    textAlign: "center",
                    paddingLeft: 10,
                    color: "#8D8D9C",
                    fontSize: 12,
                    height: "55%",
                }}
            >
                {name}
            </Text>
        </TouchableOpacity>
    );
}

/**
 * Component for creating a dropdown menu. 
 * 
 * @param width - The width of the component.
 */
export const Dropdown = ({width}) => {
    const [tag, setTag] = useState("None");
    const [expanded, setExpanded] = useState(false);

    return (
        <TouchableOpacity
            style={{width: width}}
            onPress={() => setExpanded(!expanded)}
        >
            <View //container
                className="mb-2 mt-1"
                style={{
                    paddingLeft: 5,
                    paddingRight: 5
                }}
            >
                <View //gray background
                    style={{
                        backgroundColor: "#232329",
                        padding: 5,
                        borderRadius: 5
                    }}
                >
                    <View //underline text
                        style={{
                            borderBottomWidth: 1,
                            borderColor: "#8D8D9C",
                            width: "100%"
                        }}
                    >
                        <Text
                            style={{
                                width: "100%",
                                textAlign: "center",
                                fontSize: 12,
                                color: "#8D8D9C",
                                top: 5,
                                height: 24
                            }}
                        >
                            {tag}
                        </Text>
                    </View>
                    {expanded && <View //selection container
                        style={{
                            position: "absolute",
                            top: 30,
                            width: "100%",
                            alignSelf: "center",
                            backgroundColor: "#232329",
                            borderBottomLeftRadius: 5,
                            borderBottomRightRadius: 5,
                            shadowColor: "black",
                            shadowOffset: {
                                width: -2,
                                height: 2
                            },
                            shadowOpacity: 0.5,
                            elevation: 4
                        }}
                    >
                        {
                            tags.map((tag) => (
                                <DropdownItem
                                    key={tag.name}
                                    name={tag.name}
                                    color={tag.color}
                                    setTag={setTag}
                                />
                            ))
                        }
                    </View>}
                </View>
            </View>
        </TouchableOpacity>
    );  
}