import React from "react"; 
import { useState } from "react"; 
import { KeyboardAvoidingView } from "react-native"; 
import { Form, SubmitButton, Warning } from "../components";
import { database } from "../database";
import { hash } from "../functions";

/**
 * Allows user to enter login information. 
 * 
 * @param navigation - Provides screen with Stack Navigator functions. 
 */
export const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(""); 
    const [pass, setPass] = useState(""); 
    const [warning, setWarning] = useState("");
    const handleLogin = () => {
        if (email === "" || pass === "") {
            setWarning("You must fill out all fields");
            return;
        }
        database.loginUser(email, hash(pass), setWarning, navigation);
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
                width="85%"
            />
            <Form 
                text={pass}
                setText={setPass}
                secure={true}
                label="Password"
                width="85%"
            />
            <Warning 
                warning={warning}
            />
            <SubmitButton
                text="Login"
                handlePress={handleLogin}
            />
        </KeyboardAvoidingView>
    );
}