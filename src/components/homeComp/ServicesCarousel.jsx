import React, { useState } from "react";
import { Box, Typography, Button, Card, Grid } from "@mui/material";
import StylishDividerText from "./StylishDividerText";
import ContactPopup from "../common/ContactPopup";
import theme from '../../theme.js';

const services = [
  {
    title: "Schedule",
    description:
      "Schedule an appointment with our team to explore how we can assist with your business accounting needs. Operating virtually from India, we ensure convenience and flexibility.",
    hasButton: true,
  },
  {
    title: "Initial Meeting",
    description:
      "In a 30-minute initial consultation, we discuss your business's unique needs and identify how our services can best support your goals.",
  },
  {
    title: "Provide a Diagnostic Review",
    description:
      "Following the consultation, we provide a detailed diagnostic review, highlighting areas for improvement, opportunities for automation, and addressing any questions you may have.",
  },
];

const ServicesSection = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleChatClick = () => {
    setContactModalOpen(true);
  };
  return (
    <Box
      sx={{
        py: { xs: 3, sm:3,md: 4 },
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%)`,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          borderRadius: "50%",
          zIndex: 1,
          opacity: 0.15,
        },
        // Pattern shapes in contrasting colors
        "&::before": {
          width: 250,
          height: 250,
          background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 70%)`,
          top: -60,
          left: -60,
        },
        "&::after": {
          width: 300,
          height: 300,
          background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 70%)`,
          bottom: -100,
          right: -80,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          position: "relative",
          zIndex: 2,
        }}
      >
        <StylishDividerText text="How We Do" color="#fff" />

        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            letterSpacing: "0.5px",
            mb: { xs: 3, sm: 5 },
          }}
        >
          Our Work Process
        </Typography>

        {/* First Row: Single Card Centered */}
        <Grid container justifyContent="center" sx={{ mb: { xs: 6, md: 8 } }}>
          <Card
            sx={{
              width: 400,
              p: { xs: 3, md: 5 },
              borderRadius: "20px",
              textAlign: "center",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255, 148, 1, 0.9)",
              color: theme.palette.primary.main,
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
              backdropFilter: "blur(6px)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 18px 50px rgba(0,0,0,0.3)",
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: "1.4rem" }}>
              {services[0].title}
            </Typography>

            <Typography variant="body2" sx={{ lineHeight: 1.8, mb: 3, px: 1 }}>
              {services[0].description}
            </Typography>

            {services[0].hasButton && (
              <Button
                onClick={handleChatClick}
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  textTransform: "capitalize",
                  px: 5,
                  py: 1,
                  borderRadius: "30px",
                  "&:hover": { backgroundColor: theme.palette.primary.main },
                }}
              >
                Book a Consultation
              </Button>
            )}
          </Card>
        </Grid>

        {/* Second Row: Two Cards Centered */}
        <Grid container justifyContent="center" spacing={4}>
          {services.slice(1).map((service, i) => (
            <Card
              key={i}
              sx={{
                width: 400,
                p: { xs: 3, sm:0,md: 5 },
                mt:-2,mb:{ xs: 3, sm:2,md: 5 },
                borderRadius: "20px",
                textAlign: "center",
                minHeight: 180,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: "#fff",
                color: theme.palette.primary.main,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, fontSize: "1.3rem" }}>
                {service.title}
              </Typography>

              <Typography variant="body2" sx={{ lineHeight: 1.8, px: 1 }}>
                {service.description}
              </Typography>
            </Card>
          ))}
        </Grid>
      </Box>

      {/* Contact Popup */}
      <ContactPopup
        open={contactModalOpen}
        handleClose={() => setContactModalOpen(false)}
      />
    </Box>
  );
};

export default ServicesSection;
