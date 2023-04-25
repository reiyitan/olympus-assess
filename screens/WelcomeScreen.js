import React from "react"; 
import { View } from "react-native"; 
import TouchButton from "../components/TouchButton";

const WelcomeScreen = ({navigation}) => {
    const handleLogin = () => {

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

export default WelcomeScreen;   