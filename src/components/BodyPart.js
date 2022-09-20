import React from 'react';
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack type="button"
            align="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? "4px solid #FF2625" : "none",
                borderBottomLeftRadius: '20px',
                borderLeft: '4px solid #FF2625',
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "47px",
            }}
        >
            <img src={Icon} alt="dumbell" className="" styles={{ width: '40px', height: '40px' }} />
        </Stack >
    )
}

export default BodyPart;