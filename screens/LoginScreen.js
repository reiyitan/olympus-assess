import React from "react"; 
import { useState } from "react"; 
import { View } from "react-native"; 
import { Form, TouchButton } from "../components";

export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(""); 
    const [pass, setPass] = useState(""); 
    const handleLogin = () => {
        //navigate to home screen
    }

    return (
        <View
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
            <TouchButton 
                text="Login"
                handlePress={handleLogin}
            />
        </View>
    );
}