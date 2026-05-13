import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import work from "../../assets/work.webp";
import theme from '../../theme.js';

const steps = [
  {
    number: "01",
    title: "Understand Your Needs",
    description:
      "We start by learning about your business, goals, and challenges.",
  },
  {
    number: "02",
    title: "Customized Solutions",
    description:
      "Our team creates accounting and bookkeeping solutions best suited to your business's specific needs.",
  },
  {
    number: "03",
    title: "Ongoing Support",
    description:
      "We handle day-to-day finances, provide valuable insights, and assist with planning, allowing you to focus on growth.",
  },
];

const HowWeWorkSection = () => {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 12 },
        pl: { md: 0 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="left">
          {/* LEFT STEPS - Now comes first */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "left",
                fontWeight: 700,
                mb: 3.5,
                pt: 3,
                fontFamily: "'Poppins', sans-serif",
                color: theme.palette.primary.main,
              }}
            >
              How We Work
            </Typography>
            
            {steps.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 5,
                }}
              >
                {/* Number Box */}
                <Box
                  sx={{
                    minWidth: 60,
                    height: 60,
                    borderRadius: "12px",
                    backgroundColor:
                      index === 1
                        ? theme.palette.secondary.main
                        : theme.palette.primary.main,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  {step.number}
                </Box>

                {/* Text Content */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: "'Poppins', sans-serif",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.8,
                      color: theme.palette.text.secondary,
                      maxWidth: "500px",
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* RIGHT IMAGE - Now comes second */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: { xs: 300, md: 450 },
                maxWidth: 700,
                borderTopLeftRadius: "120px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                component="img"
                src={work}
                alt="How we work"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowWeWorkSection;