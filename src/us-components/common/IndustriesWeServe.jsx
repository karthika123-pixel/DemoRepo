import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import {
  Business,
  Factory,
  HomeWork,
  LocalHospital,
  VolunteerActivism,
  Storefront,
  Restaurant,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: <Business sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#00c853" }} />,
    title: "Contractors",
    link: "us/industry/bookkeeping-for-contractors-companies/",
  },
  {
    icon: <HomeWork sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#00c853" }} />,
    title: "Real Estate",
    link: "/us/industry/bookkeeping-for-real-estate-companies/",
  },
  {
    icon: <Factory sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#00c853" }} />,
    title: "Manufacturing",
    link: "/us/industry/accounting-services-for-manufacturing/",
  },
  {
    icon: <LocalHospital sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#00c853" }} />,
    title: "Healthcare",
    link: "/us/industry/accounting-services-for-healthcare/",
  },
  {
    icon: <VolunteerActivism sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#00c853" }} />,
    title: "Non-Profit",
    link: "/us/industry/accounting-services-for-nonprofit-organizations/",
  },
  {
    icon: <Restaurant sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#00c853" }} />,
    title: "Restaurant",
    link: "/us/industry/accounting-services-for-restaurant-businesses/",
  },
  {
    icon: <Storefront sx={{ fontSize: { xs: 32, sm: 36, md: 40 }, color: "#00c853" }} />,
    title: "Retail Business",
    link: "/us/industry/accounting-services-for-retail-businesses/",
  },
];

const IndustriesWeServe = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f0f0f",
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 1.5, sm: 2, md: 4, lg: 8 },
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#ffffff",
          mb: { xs: 3, sm: 4, md: 5, lg: 6 },
          fontFamily: "'Poppins', sans-serif",
          letterSpacing: "0.5px",
          fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem", lg: "2.5rem" },
        }}
      >
        Industries We Serve
      </Typography>

      {/* Industries Grid */}
      <Grid 
        container 
        spacing={{ xs: 1.5, sm: 2, md: 2.5, lg: 3 }} 
        justifyContent="center"
      >
        {industries.map((item, index) => (
          <Grid 
            key={index} 
            item 
            xs={4}      // 3 items on mobile (12/4 = 3)
            sm={4}      // 3 items on tablet
            md={3}      // 4 items on desktop
            lg={2.4}    // 5 items on large desktop (12/2.4 = 5)
            sx={{
              display: "flex",
              justifyContent: "center",
              // Hide the 7th item (index 6) on mobile only
              ...(index === 6 && {
                display: { xs: "none", sm: "flex" } // Hide on mobile, show on tablet and up
              })
            }}
          >
            <Card
              component={Link}
              to={item.link}
              sx={{
                textDecoration: "none",
                backgroundColor: "#1b1b1b",
                border: "1px solid #2f2f2f",
                borderRadius: { xs: "16px", sm: "18px", md: "20px" },
                width: "100%",
                // Use fixed width percentages instead of maxWidth to ensure all cards are the same size
                aspectRatio: "1/1", // Makes cards square (same width and height)
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "pointer",
                mx: "auto", // Center the card
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#00c853",
                  boxShadow: "0 8px 25px rgba(0, 200, 83, 0.3)",
                  background:
                    "linear-gradient(145deg, #1b1b1b 0%, #232323 100%)",
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  p: { xs: 1, sm: 1.5, md: 2 },
                  "&:last-child": { pb: { xs: 1, sm: 1.5, md: 2 } },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {item.icon}
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem", lg: "0.9rem" },
                    fontWeight: 500,
                    mt: { xs: 0.5, sm: 0.75, md: 1 },
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.3,
                    wordBreak: "break-word",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IndustriesWeServe;