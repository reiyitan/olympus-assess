import React from "react";
import { useEffect } from "react";
import { View, Text } from "react-native"; 

export const HomeScreen = ({route, navigation}) => {
    const { email } = route.params;

    return (
        <View>
            <Text>Hi, {email}</Text>
        </View>
    );
}