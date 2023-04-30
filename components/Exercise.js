import React from "react";
import { useState } from "react";
import { Form } from "./Form";
import { Header } from "./Header";
import { ExerciseRow } from "./ExerciseRow";

const numRows = 3; 
const zIndices = Array.from({length: numRows}, (_, i) => numRows - i);

/**
 * Presents numRows rows for weight, reps, RPE, and tag.
 */
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
            {zIndices.map((zIndex) => (
                <ExerciseRow 
                    key={zIndex} 
                    zIndex={zIndex} 
                />
            ))}
        </>
    );
}