import React from "react"; 
import { useState } from "react"; 
import { KeyboardAvoidingView } from "react-native"; 
import { Form, SubmitButton } from "../components";

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(""); 
    const [pass, setPass] = useState(""); 
    const handleLogin = () => {
        //navigate to home screen
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Form 
                text={email}
                setText={setEmail}
                secure={false}
                placeholder="Email"
            />
            <Form 
                text={pass}
                setText={setPass}
                secure={true}
                placeholder="Password"
            />
            <SubmitButton
                text="Login"
                handlePress={handleLogin}
            />
        </KeyboardAvoidingView>
    );
}