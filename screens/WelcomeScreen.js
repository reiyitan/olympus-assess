import React from "react"; 
import { View } from "react-native"; 
import { SubmitButton } from "../components";

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
            <SubmitButton 
                text="Login"
                handlePress={handleLogin}
            />
            <SubmitButton
                text="Sign up"
                handlePress={handleSignUp}
            />
        </View>
    );
}