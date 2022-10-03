import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography, Paper } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", exerciseOptions);
      setBodyParts(["all", ...bodyPartsData]);
      console.log("ttttt", bodyPartsData);
    }
    fetchExercisesData();
  }, [])
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions)
      const searchExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search.toLowerCase())
        || exercise.target.toLowerCase().includes(search.toLowerCase())
        || exercise.equipment.toLowerCase().includes(search.toLowerCase())
        || exercise.bodyPart.toLowerCase().includes(search.toLowerCase()))
      setSearch("");
      setExercises(searchExercises);
      console.log("search", exercisesData)
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" text-align="center">
        Awesome exercises you <br />should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#F5F5F5",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          placeholder="Search Exercises"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
        />
        <Button className="search-btn" sx={{
          backgroundColor: "#FF2625",
          color: "#fff",
          textTransform: "none",
          width: {
            lg: "160px",
            xs: "80px"
          },
          fontSize: {
            lg: "20px",
            xs: "14px"
          },
          height: "56px",
          position: "absolute",
          right: "0",
        }}
          onClick={handleSearch}
        >
          Search
          <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search" />

        </Button>

      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar data={bodyParts}
          bodyPart={bodyPart}
          bodyParts
          setBodyPart={setBodyPart}
        />
      </Box>

    </Stack>
  )
}

export default SearchExercises