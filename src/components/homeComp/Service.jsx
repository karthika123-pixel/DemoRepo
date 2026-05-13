import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import {
  AccountTree,
  Settings,
  Assignment,
  Receipt,
  SupportAgent,
   AccountBalance,
   Payment,
} from "@mui/icons-material";
import StylishDividerText from "./StylishDividerText";
import { Link } from "react-router-dom";
import theme from '../../theme.js';

const services = [
  {
    icon: <AccountTree />,
    title: "Tax Planning & Preparation",
    description:
      "Comprehensive tax planning and preparation services for individuals, corporations, and nonprofits.",
    link: "/us/services/tax-planning-and-preparation-services-usa/",
  },
  {
  icon: <Receipt />,
  title: "Bookkeeping",
  description:
    "Streamlined bookkeeping services that keep your financial records organized and compliant.",
  link: "/us/services/bookkeeping-company-in-the-usa/",
},
 {
   icon: <Settings />,
   title: "CPA Service",
   description:
     "Top-tier CPA services ensuring accurate financial reporting and compliance for your business.",
   link: "/us/services/best-cpa-services-for-small-businesses-in-the-usa/",
 },
   {
    icon: <SupportAgent />,
    title: "Virtual Assistant",
    description:
      "Let us handle your administrative and bookkeeping tasks efficiently with our virtual assistant team.",
    link: "/us/services/virtual-assistant-service-in-the-usa/",
  },
    {
    icon: <Payment />,
    title: "Payroll Management",
    description:
      "Reliable, automated payroll services ensuring accuracy and peace of mind every payday.",
    link: "/us/services/outsourcing-accounting-data-entry-services-in-the-usa/",
  },
{
  icon: <AccountBalance />,
  title: "Controller Services",
  description:
    "Gain financial clarity and strategic insight through expert outsourced controller services.",
  link: "/us/services/financial-controller-services-in-the-usa/",
},
];

const ServicesSection = () => {
  return (
    <Box
      sx={{
        pt: 4,pb: 9,
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px", px: { xs: 2, md: 4 } }}>
        {/* Divider */}
        <StylishDividerText text="What We Provide" />

        {/* Section Title */}
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
          Our Services
        </Typography>

        {/* 3-Column Responsive Grid */}
        <Grid
          container
          spacing={4}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {services.map((service, i) => (
            <Card
              key={i}
              sx={{
                p: 4,
                borderRadius: "20px",
                textAlign: "center",
                height: "100%",
                backdropFilter: "blur(10px)",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(245,245,245,0.85))",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.06), inset 0 0 10px rgba(255,255,255,0.2)",
                transition: "all 0.4s ease",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.15), inset 0 0 15px rgba(255,255,255,0.3)",
                  background: `linear-gradient(145deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
                  "& .service-title, & .service-desc, & .service-icon": {
                    color: "#fff",
                    WebkitTextFillColor: "#fff",
                  },
                  "& .service-btn": {
                    background: "#fff",
                    color: theme.palette.primary.main,
                  },
                },
              }}
            >
              <CardContent>
                <Box
                  className="service-icon"
                  sx={{
                    mb: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    transition: "all 0.4s ease",
                  }}
                >
                  {React.cloneElement(service.icon, { sx: { fontSize: 60 } })}
                </Box>

                <Typography
                  variant="h6"
                  className="service-title"
                  sx={{
                    fontWeight: 700,
                    color: "hsl(180, 82%, 11%)",
                    mb: 1,
                    fontSize: "1.2rem",
                    transition: "color 0.4s ease",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.title}
                </Typography>

                <Typography
                  variant="body2"
                  className="service-desc"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 3,
                    px: 1,
                    lineHeight: 1.6,
                    transition: "color 0.4s ease",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {service.description}
                </Typography>

                <Button
                  component={Link}
                  to={service.link}
                  variant="contained"
                  className="service-btn"
                  sx={{
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
                    borderRadius: "30px",
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    color: "#fff",
                    textTransform: "none",
                    fontFamily: "'Poppins', sans-serif",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSection;
