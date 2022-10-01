import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Details from '../components/Detail';

const ExerciseDetail = ({ exercises, setExercises, bodyPart }) => {
    return (
        <Box id="exercises"
            sx={{ mt: { lg: "100px" } }}
            mt="50px"
        >
            <Details />
            <ExerciseVideos />
            <SimilarExercises />

        </Box>
    )
}

export default ExerciseDetail;