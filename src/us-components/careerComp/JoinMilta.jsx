// src/components/aboutComp/JoinMilta.jsx
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import JoinImage from "../../assets/join-milta.jpg";
import { useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton";

const JoinMilta = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 5 },
        px: { xs: 2, sm: 4 },
        backgroundColor: "#f8fff9",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          backgroundColor: "#fff",
        }}
      >
        <Grid
          container
          alignItems="stretch"
          sx={{
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Column - Image */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              mb: { xs: 3, md: 0 },
            }}
          >
            <Box
              component="img"
              src={JoinImage}
              alt="Join Milta Team"
              sx={{
                width: { xs: "90%", sm: "80%", md: "100%" },
                maxWidth: { xs: "100%", sm: 450, md: 500 },
                height: { xs: 220, sm: 320, md: 400 },
                objectFit: "cover",
                pt: { xs: 0, md: 14 },
                borderRadius: { xs: 3, md: 0 },
              }}
            />
          </Grid>

          {/* Right Column - Content */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
              height: { xs: "auto", sm: "auto", md: 500 },
              maxWidth: 800,
              px: { xs: 2.5, sm: 4, md: 6 },
              py: { xs: 4, md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontFamily: theme.typography.body1.fontFamily,
                fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
                background:
                  "linear-gradient(to top, hsl(180, 82%, 11%), hsl(129, 30%, 22%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Join Milta – Innovate, Grow, and Dream with Us!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#333",
                lineHeight: 1.8,
                mb: 2,
                fontFamily: theme.typography.body1.fontFamily,
                textAlign: "justify",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              For 15+ years, Milta has empowered global businesses including
              Fortune 100 companies across US countries, with a focus on
              US-based clients through Finance & Accounting, IT, and Revenue
              Cycle Management solutions.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#333",
                lineHeight: 1.8,
                mb: 4,
                fontFamily: theme.typography.body1.fontFamily,
                textAlign: "justify",
                fontSize: { xs: "0.9rem", sm: "1rem" },
              }}
            >
              At Milta, you’ll tackle exciting challenges, voice bold ideas, and
              grow in a collaborative “family” culture. We’re passionate about
              innovation, sustainability, and building a tech-driven future that
              inspires pride.
            </Typography>

            {/* Custom Button */}
            <CustomButton onClick={() => navigate("/career-opportunities")}>
              See All Open Positions
            </CustomButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default JoinMilta;
