import React from "react"; 
import { View } from "react-native"; 
import { SubmitButton } from "../components";

/**
 * Displays Login and Sign up buttons. 
 * 
 * @param navigation - Provides screen with Stack Navigator functions.
 */
export const WelcomeScreen = ({navigation}) => {
    const handleLogin = () => {
        navigation.navigate("LoginScreen");
    }

    const handleSignUp = () => {
        navigation.navigate("SignUpScreen");
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