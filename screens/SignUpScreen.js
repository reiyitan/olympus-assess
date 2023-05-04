import React from "react";
import { useState, useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Form, SubmitButton, Warning } from "../components";
import { database } from "../database";
import { hash } from "../functions";

/**
 * Provides user with input fields to create an account. 
 * 
 * @param navigation - Provides screen with Stack Navigator functions.
 */
export const SignUpScreen = ({navigation}) => {
    //user input
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState(""); 
    const [confirmPass, setConfirmPass] = useState("");

    //functionality
    const [warning, setWarning] = useState(""); 
    const handleSignUp = () => {
        if (pass !== confirmPass) {
            return;
        }
        const arr = [fname, lname, email, pass, confirmPass]; 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "") {
                setWarning("You must fill out all fields");
                return;
            }
        }
        database.insertUser(fname, lname, email, hash(pass), setWarning, navigation);
    }
    useEffect(() => {
        if (pass !== confirmPass) setWarning("Passwords do not match");
        else setWarning("");
    }, [pass, confirmPass]);

    return (
        <KeyboardAvoidingView 
            behavior="padding"
            className="color-white"
            style= {{
                position: "absolute",
                width: "100%",
                height: "100%",
                justifyContent: "center"
            }}
        >
            <Form
                text={fname}
                setText={setFname}
                secure={false}
                label="First name"
                width="85%"
            />
            <Form
                text={lname}
                setText={setLname}
                secure={false}
                label="Last name"
                width="85%"
            />
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
            <Form
                text={confirmPass}
                setText={setConfirmPass}
                secure={true}
                label="Confirm your password"
                width="85%"
            />
            <Warning warning={warning}/>
            <SubmitButton 
                text="Sign up"
                handlePress={handleSignUp}
            />
        </KeyboardAvoidingView>
    );
}