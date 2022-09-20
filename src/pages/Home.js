import React, { useState } from 'react';
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises.js";
import Exercises from "../components/Exercises";

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyParts] = useState('all');

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyParts={setBodyParts} />
            <Exercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyParts={setBodyParts}
            />
        </Box>
    )
}

export default Home;