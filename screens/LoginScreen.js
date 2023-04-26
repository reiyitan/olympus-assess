import React from "react"; 
import { useState } from "react"; 
import { KeyboardAvoidingView } from "react-native"; 
import { Form, SubmitButton } from "../components";

/**
 * Allows user to enter login information. 
 * 
 * @param navigation - Provides screen with Stack Navigator functions. 
 */
export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(""); 
    const [pass, setPass] = useState(""); 
    const handleLogin = () => {
        navigation.navigate("HomeScreen", {email});
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                justifyContent: "center"
            }}
        >
            <Form 
                text={email}
                setText={setEmail}
                secure={false}
                label="Email"
            />
            <Form 
                text={pass}
                setText={setPass}
                secure={true}
                label="Password"
            />
            <SubmitButton
                text="Login"
                handlePress={handleLogin}
            />
        </KeyboardAvoidingView>
    );
}