import React, { useEffect, useState } from 'react';
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = ({ exercises, setExercises, bodyPart }) => {
    return (
        <Box id="exercises"
            sx={{ mt: { lg: "100px" } }}
            mt="50px"
        >
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
        </Box>
    )
}

export default ExerciseDetail;