import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import StylishDividerText from "./StylishDividerText";

import cert1 from "@/assets/certification-1.jpg";
import cert2 from "@/assets/certification-2.jpg";
import cert3 from "@/assets/certification-3.png";
import cert4 from "@/assets/certification-4.png";
import cert5 from "@/assets/certification-5.png";
import cert6 from "@/assets/certification-6.png";
import cert7 from "@/assets/certification-7.png";
import cert8 from "@/assets/certification-8.jpg";
import cert9 from "@/assets/certification-9.jpg";
import cert10 from "@/assets/certification-10.png";
import theme from '../../theme.js';

const certifications = [
  cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9, cert10,
];

const CertificationSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Filter certifications for mobile (show only first 9)
  const displayedCertifications = isMobile ? certifications.slice(0, 9) : certifications;

  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        backgroundColor: theme.palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StylishDividerText text="What We Have" />

      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{
          color: theme.palette.primary.main,
          textTransform: "capitalize",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
          letterSpacing: "0.5px",
          mb: { xs: 3, sm: 5 },
        }}
      >
        Certifications & Accreditations
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1000px" }}
      >
        {displayedCertifications.map((logo, index) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={3}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // ⚛️ Pure CSS Animation (Better for Page Score)
              animation: `fadeUpIn 0.8s ease forwards ${index * 0.15}s`,
              opacity: 0,
              "@keyframes fadeUpIn": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={`Certification badge ${index + 1}`}
              loading="lazy" // ⚛️ High performance lazy loading
              sx={{
                width: { xs: "80px", sm: "130px", md: "150px" },
                aspectRatio: "3 / 2", // ⚛️ Reserve space to prevent CLS
                height: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.08)" },
              }}
            />
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default CertificationSection;