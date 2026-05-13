// src/components/common/CtaSection.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dashboardImg from "../../assets/BLOG_ILLUSTRATION_59-59.webp"; // replace with your image

const CtaSection = () => {
  return (
    <Box
      sx={{
        pt: { xs: 6, md:3 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            px: { xs: 3, md: 6 },
            py: { xs: 5, md: 7 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            backgroundColor: "rgba(0,0,0,0.15)",
            backdropFilter: "blur(6px)",
             background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #5f7d2e 100%)`,
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ maxWidth: 520, zIndex: 2 }}>
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                mb: 2,
              }}
            >
              Get started with our services today
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 3,
              }}
            >
              Try our services free for 7 days — full access, no commitment.
              Cancel anytime.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#fff",
                color: (theme) => theme.palette.primary.main,
                px: 3,
                py: 1.2,
                borderRadius: "30px",
                fontWeight: 600,
                "&:hover": {
                  bgcolor: (theme) => theme.palette.secondary.main,
                  color: "#fff",
                },
              }}
            >
              Start your free trial
            </Button>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: "45%" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={dashboardImg}
              alt="dashboard"
              sx={{
                width: "100%",
                maxWidth: 420,
                transform: "rotate(-8deg)",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CtaSection;