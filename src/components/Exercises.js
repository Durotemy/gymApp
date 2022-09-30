import React, { useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    console.log("exercises", exercises)
    return (
        <Box id="exercises"
            sx={{ mt: { lg: "100px" } }}
            mt="50px"
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack spacing={2}
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{ gap: { lg: '110px', xs: '50px' } }}>
                {exercises.map((exercise) => (
                    <Box key={exercise.id} sx={{ width: { lg: "400px", xs: "300px" } }}>
                        <Box sx={{ height: { lg: "400px", xs: "300px" }, width: { lg: "400px", xs: "300px" }, borderRadius: "20px", overflow: "hidden" }}>
                            <img src={exercise.gifUrl} alt={exercise.name} />
                        </Box>
                        <Typography variant="h5" mt="20px" mb="10px">
                            {exercise.name}
                        </Typography>
                        {/* <Typography variant="body1" mb="20px">
                            {exercise.description}
                        </Typography> */}
                    </Box>
                ))}
            </Stack>


        </Box>
    )
}

export default Exercises;