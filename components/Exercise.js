import React from "react";
import { useState } from "react";
import { Form } from "../common";
import { Header } from "../utils";
import { ExerciseRow } from "../utils";

export const Exercise = () => {
    const [exerciseName, setExerciseName] = useState("");

    return (
        <>
            <Form 
                text={exerciseName}
                setText={setExerciseName} 
                label="Exercise name"
                width="85%"
            />
            <Header />
            <ExerciseRow />
            <ExerciseRow />
            <ExerciseRow />
        </>
    );
}