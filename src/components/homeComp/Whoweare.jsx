import React, { useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import StylishDividerText from "./StylishDividerText";
import ContactPopup from "../common/ContactPopup";
import theme from '../../theme.js';

const steps = [
  {
    title: "1. Schedule",
    description:
      "Schedule an appointment with our team to explore how we can assist with your business accounting needs. Operating virtually from India, we ensure convenience and flexibility.",
    button: true,
  },
  {
    title: "2. Initial Meeting",
    description:
      "In a 30-minute initial consultation, we discuss your business's unique needs and identify how our services can best support your goals.",
  },
  {
    title: "3. Provide a Diagnostic Review",
    description:
      "Following the consultation, we provide a detailed diagnostic review, highlighting areas for improvement, opportunities for automation, and addressing any questions you may have.",
  },
];

const ServicesSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleClick = () => {
    setContactModalOpen(true);
  };

  return (
    <Box
      sx={{
        pt: { xs: 6, md: 5 },pb: { xs: 6, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <StylishDividerText text="How We Work" color={theme.palette.primary.main} />

        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: theme.palette.primary.main,
            fontSize: { xs: "1.6rem", md: "2.3rem" },
          }}
        >
          Our Work Process
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            maxWidth: "750px",
            mx: "auto",
            mb: { xs: 5, md: 8 },
            color: theme.palette.text.secondary,
            fontSize: { xs: "0.95rem", md: "1rem" },
            lineHeight: 1.7,
          }}
        >
          We provide reliable and affordable outsourcing services for small and
          medium-sized businesses across the USA.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", sm: 300, md: 340 },
                  minHeight: 260,
                  p: 4,
                  borderRadius: "20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  backgroundColor: "#ffffff",
                  color: theme.palette.primary.main,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: "1.1rem",
                    color: theme.palette.primary.main,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    mb: step.button ? 3 : 0,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {step.description}
                </Typography>

                {step.button && (
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: "30px",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    Book a Consultation
                  </Button>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <ContactPopup 
        open={contactModalOpen}
        handleClose={() => setContactModalOpen(false)}
      />
    </Box>
  );
};

export default ServicesSection;