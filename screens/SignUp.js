import React from "react";
import { useState } from "react";
import { View } from "react-native";
import Form from "../components/Form";

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState(""); 
    const [confirmPass, setConfirmPass] = useState(""); 

    return (
        <View className="color-white">
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