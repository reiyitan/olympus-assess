import React from "react"; 
import { View } from "react-native"; 
import { TouchButton } from "../components";

export const WelcomeScreen = ({navigation}) => {
    const handleLogin = () => {
        navigation.navigate("LoginScreen");
    }

    const handleSignUp = () => {

    }

    return (
        <View
            style={{
                position: "absolute", 
                bottom: 75,
                width: "100%"
            }}
        >
            <TouchButton 
                text="Login"
                handlePress={handleLogin}
            />
            <TouchButton
                text="Sign up"
                handlePress={handleSignUp}
            />
        </View>
    );
}