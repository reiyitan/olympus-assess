import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Form, SubmitButton } from "../components";

export const SignUpScreen = ({navigation}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState(""); 
    const [confirmPass, setConfirmPass] = useState(""); 

    return (
        <View className="color-white">
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

            />
        </View>
    );
}