import React from "react";
import { Box, Container, Typography, Fade } from "@mui/material";
import theme from '../../theme.js';

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 40%, ${theme.palette.primary.main} 100%)`,
        color: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Fade in timeout={1200}>
          <Box>
            {/* Highlight Line */}
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
              About Us
            </Typography>

            {/* Main Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.4,
              }}
            >
              Your Trusted Partner for{" "}
              <Box
                component="span"
                sx={{
                  color: theme.palette.secondary.main,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: 2,
                    width: "100%",
                    height: "4px",
                    
                    borderRadius: "2px",
                  },
                }}
              >
                Outsourced Accounting & Bookkeeping
              </Box>{" "}
              Services
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.9)",
                fontFamily: "'Poppins', sans-serif",
                mb: 3,
                lineHeight: 1.9,
                fontSize: "1rem",
              }}
            >
              At <b>Milta Accounting Services</b>, we believe in building lasting
              partnerships through precision, reliability, and trust. Our
              offshore accounting solutions simplify your business finances, so
              you can focus on what matters most — growth.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Poppins', sans-serif",
                mb: 3,
                lineHeight: 1.9,
              }}
            >
              Whether it’s bookkeeping, budgeting, or compliance, our expert
              team ensures accuracy and clarity in every detail. From managing
              reports to optimizing tax strategies, we deliver with
              professionalism and transparency.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.9,
              }}
            >
              With Milta, you’re not just outsourcing — you’re partnering with a
              team that cares about your success as much as you do.
            </Typography>

            {/* Decorative line */}
            <Box
              sx={{
                width: 80,
                height: 4,
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 2,
                mx: "auto",
                mt: 5,
              }}
            />
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutSection;
