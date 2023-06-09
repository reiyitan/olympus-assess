import React from "react";
import { useState } from "react";
import { Form } from "./Form"; 
import { Dropdown } from "./Dropdown";
import { View } from "react-native"; 

/**
 * Renders Weight, Reps, RPE, and Tag input fields. 
 * 
 * @param zIndex - The zIndex of the row.
 */
export const ExerciseRow = ({zIndex}) => {
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
                width: "80%",
                zIndex: zIndex
            }}
        >
            <Form 
                text={weight}
                setText={setWeight}
                width="25%"
                bgColor="#232329"
                textColor="#8D8D9C"
                inputType="numeric"
                center={true}
            />
            <Form 
                text={reps}
                setText={setReps}
                width="17.5%"
                bgColor="#232329"
                textColor="#8D8D9C"
                inputType="numeric"
                center={true}
            />
            <Form 
                text={RPE}
                setText={setRPE}
                width="17.5%"
                bgColor="#232329"
                textColor="#8D8D9C"
                inputType="numeric"
                center={true}
            />
            <Dropdown
                width="40%"
            />
        </View>
    );
}