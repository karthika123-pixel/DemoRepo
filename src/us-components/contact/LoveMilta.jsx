import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const LoveMiltaAccounting = () => {
  const reasons = [
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 55, color: "primary.main", mb: 2 }} />,
      title: "Small Business Focus",
      desc: "We understand your challenges and offer solutions that fit your size, goals, and budget.",
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: 55, color: "primary.main", mb: 2 }} />,
      title: "Reliable Expertise",
      desc: "Our experienced team ensures your books stay accurate, compliant, and stress-free.",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 55, color: "primary.main", mb: 2 }} />,
      title: "Personalized Support",
      desc: "Get direct, hands-on service from professionals who care about your success.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 3, md: 7 },
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: 700,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
              mb: 2,
            }}
          >
            It’s a Small Business World & We Make It Easier for You
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "secondary.main",
              fontWeight: 500,
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            Three Reasons to Love Milta Accounting
          </Typography>
        </Box>

        {/* Single-Row 3 Card Layout */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {reasons.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "background.default",
                  borderRadius: "16px",
                  p: { xs: 4, md: 5 },
                  textAlign: "center",
                  border: "1px solid",
                  borderColor: "background.default",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.08)",
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    width: "50px",
                    height: "4px",
                    backgroundColor: "primary.main",
                    borderRadius: "2px",
                    mb: 2,
                  },
                }}
              >
                {item.icon}
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.main",
                    fontWeight: 700,
                    mb: 1,
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    mt: 1,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LoveMiltaAccounting;
