import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Stack } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy " />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button sx={{ ml: '21px', color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textDecoration: 'none', textTransform: 'capitalize' }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textDecoration: 'none', textTransform: 'capitalize' }}>
                    {exercise.target}
                </Button>
            </Stack >
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '20px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard