import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";
import heroImage from "../../assets/finance.jpg";

function ContactPageHero() {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        color: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background abstract lines can be simulated or we just keep it clean */}

      {/* Absolute Image on the right (bleeds to edge) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: { xs: "100%", md: "50%" },
          display: { xs: "none", md: "block" },
          zIndex: 1,
        }}
      >
        <Box
          component="img"
          src={heroImage}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        {/* The Circular Badge on the angled edge - HIGHLIGHTED */}
        <Box
          sx={{
            position: "absolute",
            left: "8%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 160,
            height: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 3,
            // Outer glow effect
            "&::before": {
              content: '""',
              position: "absolute",
              top: -15,
              left: -15,
              right: -15,
              bottom: -15,
              borderRadius: "50%",
             
              filter: "blur(15px)",
              animation: "pulseGlow 2s ease-in-out infinite",
            },
            // Additional highlight ring
            "&::after": {
              content: '""',
              position: "absolute",
              top: -10,
              left: -10,
              right: -10,
              bottom: -10,
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.6)",
              animation: "pulseRing 2s ease-in-out infinite",
            },
           
            
            
             
            
          }}
        >
          {/* Circular Text SVG - WHITE on image side */}
          <svg
            viewBox="0 0 100 100"
            width="140"
            height="140"
            style={{ position: "absolute" }}
          >
            <style>
              {`
                @keyframes spinText {
                  100% { transform: rotate(360deg); }
                }
                .spin-anim { animation: spinText 15s linear infinite; transform-origin: center; }
              `}
            </style>
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text
              fontSize="10.5"
              fontWeight="700"
              fill="#ffffff"
              stroke="#ffffff"
              strokeWidth="0.1"
              letterSpacing="1.8"
              className="spin-anim"
              style={{
                filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))",
              }}
            >
              <textPath href="#circlePath">
                BUILD A SUCCESS BRAND WITH MILTA •
              </textPath>
            </text>
          </svg>

          {/* Inner Icon - HIGHLIGHTED in white */}
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              color: "#141414",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.9)",
              zIndex: 2,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.25)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.7), 0 0 60px rgba(255, 255, 255, 0.35)",
              },
            }}
          >
            <CallMadeIcon fontSize="medium" />
          </Box>
        </Box>
      </Box>

      {/* Main Content Container */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: { xs: 300, md: 450 },
          }}
        >
          {/* Left Text */}
          <Box
            sx={{
              py: { xs: 8, md: 12 },
              maxWidth: { xs: "100%", md: "45%" },
            }}
          >
            <Typography
              variant="h1"
              fontWeight={700}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                mb: 2,
                color: "background.default",
              }}
            >
              About Us
            </Typography>

            <Stack direction="row" spacing={1.5} sx={{ pt: 1 }} flexWrap="wrap">
              <Typography
                component={Link}
                to="/"
                sx={{
                  color: "background.default",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Home
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.52)" }}>
                {">"}
              </Typography>
              <Typography
                sx={{ color: "background.default", fontWeight: 600 }}
              >
                About Us
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactPageHero;