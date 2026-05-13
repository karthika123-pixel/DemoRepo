import React from "react";
import { Box, Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import theme from '../../theme.js';

const items = [
  {
    title: "Cost Efficiency",
    description:
      "Get high-quality accounting services without overspending.",
  },
  {
    title: "Expertise on Demand",
    description:
      "Access experienced professionals whenever you need them.",
  },
  {
    title: "Scalability",
    description:
      "Service adjustments are as simple as your company's expansion.",
  },
  {
    title: "Time Savings",
    description:
      "Focus on your business while we handle your finances.",
  },
  {
    title: "Accuracy & Compliance",
    description:
      "Ensure precise bookkeeping and full regulatory compliance.",
  },
  {
    title: "Secure Data Handling",
    description:
      "We protect your data with advanced encryption and secure file transfers.",
  },
];

const IndustriesSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: 10,
        color: "#fff",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      {/* Top-left circle */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: isSmall ? "550px" : "1000px",
          height: isSmall ? "550px" : "800px",
          borderRadius: "50%",
          background: "rgba(255, 148, 1, 0.2)",
          transform: "translate(-50%, -50%)",
          animation: "moveCircle 20s linear infinite",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: theme.palette.secondary.main,
            textTransform: "uppercase",
            letterSpacing: 2,
            fontWeight: 600,
            mb: 1,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Our Values
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: "'Poppins', sans-serif",
            mb: 6,
          }}
        >
          Why Choose Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  mx: "auto",
                  maxWidth: 320,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(4px)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    background: "rgba(255,255,255,0.10)",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    boxShadow: "0 0 18px rgba(255, 148, 1, 0.35)",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Keyframes */}
      <style>
        {`
          @keyframes moveCircle {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            50% { transform: translate(-40%, -40%) rotate(180deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default IndustriesSection;
