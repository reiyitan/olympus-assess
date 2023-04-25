import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Form, SubmitButton } from "../components";

export const SignUpScreen = ({navigation}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState(""); 
    const [confirmPass, setConfirmPass] = useState("");
    const handleSignUp = () => {
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding"
            className="color-white"
            style= {{
                position: "absolute",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Form
                text={fname}
                setText={setFname}
                secure={false}
                placeholder="First name"
            />
            <Form
                text={lname}
                setText={setLname}
                secure={false}
                placeholder="Last name"
            />
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
            <Form
                text={confirmPass}
                setText={setConfirmPass}
                secure={true}
                placeholder="Confirm your password"
            />
            <SubmitButton 
                text="Sign up"
                handlePress={handleSignUp}
            />
        </KeyboardAvoidingView>
    );
}