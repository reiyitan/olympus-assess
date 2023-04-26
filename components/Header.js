import React from "react"; 
import { View, Text, StyleSheet } from "react-native" ;

const styles = StyleSheet.create({
    text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    }   
});

export const Header = () => {
    return (
        <View
            style={{
                width: "80%",
                marginLeft: "auto", 
                marginRight: "auto",
                display: "flex",
                flexDirection: "row",
                color: "white"
            }}
        >
            <Text
                style={[
                    styles.text,
                    {width: "25%"}
                ]}
            >
                Weight
            </Text>
            <Text
                style={[
                    styles.text,
                    {width: "17.5%"}
                ]}
            >
                Reps
            </Text>
            <Text
                style={[
                    styles.text,
                    {width: "17.5%"}
                ]}
            >
                RPE
            </Text>
            <Text
                style={[
                    styles.text,
                    {width: "40%"}
                ]}
            >
                Tag
            </Text>

        </View>
    );
}