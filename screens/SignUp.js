import React from "react";
import { useState } from "react";
import { View } from "react-native";
import Form from "../components/Form";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState(""); 
    const [confirmPass, setConfirmPass] = useState(""); 

    return (
        <View className="h-full bg-background color-white">
            <Form
                text={email}
                setText={setEmail}
                placeholder="Email"
            />
            <Form
                text={pass}
                setText={setPass}
                placeholder="Password"
            />
            <Form
                text={confirmPass}
                setText={setConfirmPass}
                placeholder="Confirm your password"
            />
        </View>
    );
}

export default SignUp;