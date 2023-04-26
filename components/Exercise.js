import React from "react";
import { useState } from "react";
import { Form } from "../common";
import { Header } from "../utils";

export const Exercise = () => {
    const [exerciseName, setExerciseName] = useState("");

    return (
        <>
            <Form 
                text={exerciseName}
                setText={setExerciseName} 
                secure={false}
                label="Exercise name"
            />
            <Header />
        </>
    );
}