// src/components/common/RunningTextAreas.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const RunningTextAreas = () => {
  const areas = [
    "Florida",
    "Georgia",
    "New York",
    "New Jersey",
    "North Carolina",
    "Connecticut",
    "South Carolina",
    "Maryland",
    "Massachusetts",
    "Ohio",
    "Pennsylvania",
    "Virginia",
  ];

  return (
    <Box
      sx={{
        py: 6,
        background: "#fff",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "#1d4230",
          fontWeight: 700,
          mb: 4,
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "0.5px",
        }}
      >
        Areas We Serve
      </Typography>

      {/* Running text strip */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          whiteSpace: "nowrap",
          background: "linear-gradient(90deg, #1d4230, #2e6f4e, #1d4230)", // GREEN gradient
          py: { xs: 2, md: 3 },
          borderRadius: "60px",
          boxShadow: "0 6px 25px rgba(0, 100, 0, 0.35)", // green glow shadow
        }}
      >
        <Box
          component="div"
          sx={{
            display: "inline-block",
            animation: "scroll 105s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[...areas, ...areas].map((area, index) => (
            <Box
              key={index}
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                mx: 4,
              }}
            >
              {/* Area Name */}
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  textShadow: "0 2px 5px rgba(0,0,0,0.3)",
                  letterSpacing: "0.5px",
                }}
              >
                {area}
              </Typography>

              {/* Diamond Separator */}
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  transform: "rotate(45deg)",
                  backgroundColor: "#ffffff",
                  mx: 3,
                  boxShadow: "0 0 10px rgba(255,255,255,0.9)",
                  animation: "glow 2s ease-in-out infinite",
                  "@keyframes glow": {
                    "0%": { opacity: 0.6, transform: "rotate(45deg) scale(1)" },
                    "50%": { opacity: 1, transform: "rotate(45deg) scale(1.3)" },
                    "100%": { opacity: 0.6, transform: "rotate(45deg) scale(1)" },
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RunningTextAreas;
