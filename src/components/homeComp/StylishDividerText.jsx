import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import theme from '../../theme.js';

const StylishDividerText = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        mt: 6,
        mb: 3,
      }}
    >
      <Divider
        textAlign="center"
        sx={{
          width: "100%",
          maxWidth: "450px", // keeps it compact and balanced
          mx: "auto",
          "&::before, &::after": {
            borderColor: "#ccc",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Pacifico', cursive !important",
            fontSize: { xs: "18px", sm: "20px" },
            color: theme.palette.secondary.main,
            px: 2,
            textAlign: "center",
            textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          {text}
        </Typography>
      </Divider>
    </Box>
  );
};

export default StylishDividerText;
