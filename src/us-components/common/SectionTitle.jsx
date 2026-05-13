// SectionTitle.jsx
import React from "react";
import { Typography } from "@mui/material";

function SectionTitle({ text, sx }) {
  return (
    <Typography
      variant="h4"
      textAlign="center"
      gutterBottom
      sx={{
        color: "#1d4230",
        textTransform: "capitalize",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 700,
        fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
        letterSpacing: "0.5px",
        mb: { xs: 3, sm: 4 },
        ...sx, // allow extra styling if needed
      }}
    >
      {text}
    </Typography>
  );
}

export default SectionTitle;
