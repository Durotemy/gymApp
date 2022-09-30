import React, { useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);


    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);


    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }
    return (
        <Box id="exercises"
            sx={{ mt: { lg: "100px" } }}
            mt="50px"
        >
            <Typography variant="h4" mb="46px">
                Showing Results
            </Typography>
            <Stack spacing={2}
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{ gap: { lg: '110px', xs: '50px' } }}>
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard exercise={exercise} />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && <Pagination
                    color="standard"
                    shape="rounded"
                    count={Math.ceil(exercises.length / 9)}
                    defaultPage={1}
                    page={currentPage}
                    onChange={handlePageChange}
                    size="large"
                />}
            </Stack>


        </Box>
    )
}

export default Exercises;