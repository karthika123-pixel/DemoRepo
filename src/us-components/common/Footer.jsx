// src/components/servicesComp/common/Footer.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import Trustpilot from "../../assets/Trustpilot.webp";
import bfirms from "../../assets/bfirms-certified.webp";
import logo from "/src/assets/logo.svg";

import clutch from "../../assets/clutch.webp";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #264b09ff, #1d4230)",
        color: "#fff",
        pt: { xs: 5, md: 8 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1300px",
          px: { xs: 3, sm: 4, md: 2 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* ---------- ROW 1 UPDATED (Modern, Orange Gradient) ---------- */}
        <Grid
          container
          spacing={3}
          
          alignItems="center"
          justifyContent="space-between"
          sx={{
            background:
              "linear-gradient(135deg, rgba(238, 211, 174, 0.7), rgba(245, 130, 23, 0.8))",
            borderRadius: 3,
            mt:-22,
            p: { xs: 3, md: 4 },
            border: "1px solid rgba(255,148,1,0.15)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          {/* Logo Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box component={Link} to="/" sx={{ display: "inline-block" }}>
              <Box
                component="img"
                src={logo}
                alt="Milta Accounting"
                sx={{
                  width: { xs: "220px", sm: "260px", md: "300px" },
                  filter: "drop-shadow(0px 4px 10px rgba(255,148,1,0.4))",
                }}
              />
            </Box>
          </Grid>

          {/* About Text */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 1.5,
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, #ff9401ff, #f3a12fff)",
                WebkitBackgroundClip: "text",
                color: "green",
              }}
            >
              About Company
            </Typography>
            <Typography
              sx={{
                color: "rgba(3, 0, 0, 0.85)",
                fontWeight: 400,
                lineHeight: 1.7,
                maxWidth: "500px",
                mx: { xs: "auto", md: "0" },
              }}
            >
              Milta Accounting Services is a trusted outsourcing partner for
              US-based businesses, providing reliable and affordable accounting,
              bookkeeping, tax, and virtual assistant solutions to help
              companies grow while we handle the numbers.
            </Typography>
          </Grid>

          {/* Review Logos */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box component="a" href="https://businessfirms.co/company/milta-accounting-services-pvt-ltd" target="_blank">
              <Box
                component="img"
                src={bfirms}
                alt="Bfirms Certified"
                sx={{
                  width: "95px",
                  borderRadius: 2,
                  filter: "brightness(1.1)",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>

            <Box component="a" href="https://clutch.co/profile/miltafs" target="_blank">
              <Box
                component="img"
                src={clutch}
                alt="Clutch"
                sx={{
                  width: "95px",
                  borderRadius: 2,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>

            <Box component="a" href="https://www.trustpilot.com/review/miltafs.com" target="_blank">
              <Box
                component="img"
                src={Trustpilot}
                alt="Trustpilot"
                sx={{
                  width: "130px",
                  height: "40px",
                  mt: "20px",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* ---------- ROW 2 (Your Original Code — Unchanged) ---------- */}
        {/* (All your code below stays exactly the same) */}

        <Grid
          container
          spacing={{ xs: 3, sm: 2, md: 3 }}
          justifyContent="space-between"
          sx={{
            textAlign: { xs: "center", sm: "left" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#ec9513", mb: 1.2, fontWeight: 600 }}>
              Services
            </Typography>
            {[
              { label: "Tax Planning and Preparation Services", to: "/us/services/tax-planning-and-preparation-services-usa/" },
              { label: "Bookkeeping Services", to: "/us/services/bookkeeping-company-in-the-usa/" },
              { label: "CPA Services", to: "/us/services/best-cpa-services-for-small-businesses-in-the-usa/" },
              { label: "Virtual Assistant Services", to: "/us/services/virtual-assistant-service-in-the-usa/" },
              { label: "Data Entry Services", to: "us/services/outsourcing-accounting-data-entry-services-in-the-usa/" },
              { label: "Financial Controller Services", to: "/us/services/financial-controller-services-in-the-usa/" },
            ].map((item, i) => (
              <Typography
                key={i}
                component={Link}
                to={item.to}
                sx={{
                  display: "block",
                  mb: 0.5,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  "&:hover": { color: "#ec9513" },
                  fontSize: "0.93rem",
                  transition: "color 0.3s ease",
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          {/* Industry */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#ec9513", mb: 1.2, fontWeight: 600 }}>
              Industry
            </Typography>
            {[
              { label: "Contractors", to: "us/industry/bookkeeping-for-contractors-companies/" },
              { label: "Real Estate", to: "/us/industry/bookkeeping-for-real-estate-companies/" },
              { label: "Manufacturing", to: "/us/industry/accounting-services-for-manufacturing/" },
              { label: "Healthcare", to: "/us/industry/accounting-services-for-healthcare/" },
              { label: "Non-Profit", to: "/us/industry/accounting-services-for-nonprofit-organizations/" },
              { label: "Restaurant", to: "/us/industry/accounting-services-for-restaurant-businesses/" },
              { label: "Retail Business", to: "/us/industry/accounting-services-for-retail-businesses/" },
            ].map((item, i) => (
              <Typography
                key={i}
                component={Link}
                to={item.to}
                sx={{
                  display: "block",
                  mb: 0.5,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  "&:hover": { color: "#ec9513" },
                  fontSize: "0.93rem",
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: "#ec9513", mb: 1.2, fontWeight: 600 }}>
              Company
            </Typography>
            {[
              { label: "About Us", to: "/about" },
              { label: "Career Opportunities", to: "/careers" },
              { label: "Contact Us", to: "/contact" },
              { label: "Blogs & Resources", to: "/blogs" },
              { label: "Sitemap", to: "/sitemap" },
            ].map((item, i) => (
              <Typography
                key={i}
                component={Link}
                to={item.to}
                sx={{
                  display: "block",
                  mb: 0.5,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  "&:hover": { color: "#ec9513" },
                  fontSize: "0.93rem",
                }}
              >
                {item.label}
              </Typography>
            ))}

            <Typography variant="h6" sx={{ mt: 2, mb: 1.2, fontWeight: 600 }}>
              Support
            </Typography>
            {[
              { label: "FAQs", to: "/faqs" },
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms of Service", to: "/Terms-of-Service" },
            ].map((item, i) => (
              <Typography
                key={i}
                component={Link}
                to={item.to}
                sx={{
                  display: "block",
                  mb: 0.5,
                  color: "rgba(255,255,255,0.7)",
                  textDecoration: "none",
                  "&:hover": { color: "#eebd85" },
                  fontSize: "0.93rem",
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              color: "#fff",
              mt: { xs: 3, sm: 0 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 1.5,
                fontWeight: 600,
                textAlign: { xs: "center", sm: "left" },
                color: "#ff9401",
              }}
            >
              Contact Us
            </Typography>

            <Box
              sx={{
                color: "#fff",
                lineHeight: 1.7,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {/* Contact Items */}
              {[
                {
                  icon: <Email sx={{ color: "#ff9401", fontSize: 20, mr: 1 }} />,
                  text: "For Business: info@miltafs.com",
                },
                {
                  icon: <Phone sx={{ color: "#ff9401", fontSize: 20, mr: 1 }} />,
                  text: "US: +1 325-475-4737 / +1 813-303-0213",
                },
                {
                  icon: <Email sx={{ color: "#ff9401", fontSize: 20, mr: 1 }} />,
                  text: "For Careers: hr@miltafs.com",
                },
                {
                  icon: <Phone sx={{ color: "#ff9401", fontSize: 20, mr: 1 }} />,
                  text: "India: +91-96001 03723",
                },
              ].map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  {item.icon}
                  <Typography variant="body2" sx={{ color: "#fff" }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  mt: 1,
                }}
              >
                <LocationOn
                  sx={{ color: "#ff9401", fontSize: 20, mr: 1, mt: 0.3 }}
                />
                <Typography variant="body2" sx={{ color: "#fff" }}>
                  No. 175, Sri Sai Tower, 3rd Floor,
                  <br />
                  Bharathi Colony Rd, Peelamedu,
                  <br />
                  Coimbatore, Tamil Nadu 641004.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* ---------- ROW 3 (Unchanged) ---------- */}
        <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            pt: 0,
            my: -3,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.9)" }}>
            © {new Date().getFullYear()} Milta Accounting Services. All rights reserved.
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="https://www.linkedin.com/company/milta-accounding-services-pvt-ltd/"
              target="_blank"
              sx={{
                backgroundColor: "#0A66C2",
                color: "#fff",
                p: 1,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#004182",
                  transform: "scale(1.1)",
                },
                transition: "0.3s",
              }}
            >
              <LinkedIn />
            </IconButton>

            <IconButton
              href="https://www.facebook.com/miltaaccountingservices/"
              target="_blank"
              sx={{
                backgroundColor: "#1877F2",
                color: "#fff",
                p: 1,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#145DBF",
                  transform: "scale(1.1)",
                },
                transition: "0.3s",
              }}
            >
              <Facebook />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/milta_accountings/"
              target="_blank"
              sx={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                color: "#fff",
                p: 1,
                borderRadius: "50%",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: "brightness(1.1)",
                },
                transition: "0.3s",
              }}
            >
              <Instagram />
            </IconButton>

            <IconButton
              href="https://www.youtube.com/@milta-accounting-service"
              target="_blank"
              sx={{
                backgroundColor: "#FF0000",
                color: "#fff",
                p: 1,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "#CC0000",
                  transform: "scale(1.1)",
                },
                transition: "0.3s",
              }}
            >
              <YouTube />
            </IconButton>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
