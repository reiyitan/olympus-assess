import React from "react";
import { useState } from "react";
import { Form } from "../common"; 
import { View } from "react-native"; 

export const ExerciseRow = () => {
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");
    const [RPE, setRPE] = useState("");
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80%"
            }}
        >
            <Form 
                text={weight}
                setText={setWeight}
                width="25%"
                bgColor="#232329"
                inputType="numeric"
                center={true}
            />
            <Form 
                text={reps}
                setText={setReps}
                width="17.5%"
                bgColor="#232329"
                inputType="numeric"
                center={true}
            />
            <Form 
                text={RPE}
                setText={setRPE}
                width="17.5%"
                bgColor="#232329"
                inputType="numeric"
                center={true}
            />
            <Form 
                text={RPE}
                setText={setRPE}
                width="40%"
                bgColor="#232329"
            />
        </View>
    );
}