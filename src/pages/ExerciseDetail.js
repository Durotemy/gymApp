import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from '../components/Detail';

const ExerciseDetail = () => {
    const { id } = useParams();
    const [exerciseDetail, setExerciseDetail] = useState({});

    useEffect(() => {

        const fetchExerciseDetail = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }
        fetchExerciseDetail();
    }, [id])


    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Detail exerciseDetail={exerciseDetail} />
        </Box>
    )
}
export default ExerciseDetail;