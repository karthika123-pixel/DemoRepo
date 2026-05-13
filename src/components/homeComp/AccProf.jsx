// src/components/HireDedicatedProfessionals.jsx
import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import theme from '../../theme.js';

const professionals = [
  {
    icon: AccountBalanceIcon,
    title: "Tax Professional",
    description:
      "Expert support for accurate filings, compliance, and tax savings year-round.",
  },
  {
    icon: AssignmentIcon,
    title: "Bookkeeping Specialist",
    description:
      "Maintain clean, up-to-date books for smarter financial decisions.",
  },
  {
    icon: ReceiptLongIcon,
    title: "Accounts Payable Specialist",
    description: "Efficient invoice processing and vendor payment management.",
  },
  {
    icon: BarChartIcon,
    title: "Financial Reporting Analyst",
    description:
      "Data-driven reports and insights to accelerate business growth.",
  },
];

const HireDedicatedProfessionals = () => {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        backgroundColor: "#f7f9f4",
        overflow: "hidden",

        // --- WAVY LEFT BACKGROUND ---
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('data:image/svg+xml;utf8,\
<svg width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\
<defs>\
<linearGradient id=\"grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\
<stop offset=\"0%\" stop-color=\"%23e6ede9\"/>\
<stop offset=\"100%\" stop-color=\"%23edf3ef\"/>\
</linearGradient>\
<pattern id=\"pattern\" width=\"120\" height=\"120\" patternUnits=\"userSpaceOnUse\">\
<circle cx=\"60\" cy=\"60\" r=\"3\" fill=\"%23d0d9d3\" opacity=\"0.6\"/>\
</pattern>\
<clipPath id=\"waveClip\">\
<path d=\"M0 0 C 200 150, 200 150, 0 300 L 0 0 Z\" />\
</clipPath>\
</defs>\
<rect width=\"50%\" height=\"100%\" fill=\"url(%23grad)\" clip-path=\"url(%23waveClip)\"/>\
<rect width=\"50%\" height=\"100%\" fill=\"url(%23pattern)\" clip-path=\"url(%23waveClip)\"/>\
</svg>')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.45,
          zIndex: 1,
        },
      }}
    >
      {/* REAL CONTENT */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3 }}>
        

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "1.9rem", md: "2.4rem" },
            color: theme.palette.primary.main,
          }}
        >
          Hire Dedicated Accounting Professionals
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {professionals.map((item, index) => {
            const Icon = item.icon;
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    maxWidth: 250,
                    height: 290,
                    p: 3,
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    transition: "0.3s ease",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                      borderColor: theme.palette.secondary.main,
                    },
                  }}
                >
                  <Box
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Icon sx={{ color: theme.palette.secondary.main, fontSize: 34 }} />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      color: "#444",
                      px: 1,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HireDedicatedProfessionals;
