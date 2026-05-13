import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import theme from "../../theme.js";
import accountingTeamImage from "../../assets/accounting.jpg";
import bookkeepingImage from "../../assets/bookkeeping.jpg";
import financeImage from "../../assets/finance.jpg";
import cpaImage from "../../assets/cpa.jpg";
import workImage from "../../assets/work.webp";

const galleryImages = [
  {
    src: accountingTeamImage,
    alt: "Accounting professionals reviewing reports",
    title: "Cost Efficiency",
    description:
      "Get high-quality accounting services without overspending.",
    gridColumn: { xs: "span 12", sm: "span 4" },
    minHeight: { xs: 220, sm: 250 },
  },
  {
    src: bookkeepingImage,
    alt: "Bookkeeping support in progress",
    title: "Expertise on Demand",
    description:
      "Access experienced professionals whenever you need them.",
    gridColumn: { xs: "span 12", sm: "span 4" },
    minHeight: { xs: 220, sm: 250 },
  },
  {
    src: financeImage,
    alt: "Finance discussion with clients",
    title: "Scalability",
    description:
      "Service adjustments are as simple as your company's expansion.",
    gridColumn: { xs: "span 12", sm: "span 4" },
    minHeight: { xs: 220, sm: 250 },
  },
  {
    src: cpaImage,
    alt: "Detailed accounting analysis",
    title: "Accuracy & Compliance",
    description:
      "Ensure precise bookkeeping and full regulatory compliance.",
    gridColumn: { xs: "span 12", sm: "span 6" },
    minHeight: { xs: 240, sm: 280 },
  },
  {
    src: workImage,
    alt: "Business presentation and reporting",
    title: "Time Savings",
    description:
      "Focus on your business while we handle your finances.",
    gridColumn: { xs: "span 12", sm: "span 6" },
    minHeight: { xs: 240, sm: 280 },
  },
];

const valueItems = [
  {
    title: "Cost Efficiency",
    description:
      "Get high-quality accounting services without overspending.",
  },
  {
    title: "Expertise on Demand",
    description:
      "Access experienced professionals whenever you need them.",
  },
  {
    title: "Scalability",
    description:
      "Service adjustments are as simple as your company's expansion.",
  },
  {
    title: "Time Savings",
    description:
      "Focus on your business while we handle your finances.",
  },
  {
    title: "Accuracy & Compliance",
    description:
      "Ensure precise bookkeeping and full regulatory compliance.",
  },
  {
    title: "Secure Data Handling",
    description:
      "We protect your data with advanced encryption and secure file transfers.",
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "repeating-radial-gradient(circle at 15% 35%, transparent 0, transparent 18px, rgba(255,255,255,0.22) 19px, transparent 20px)",
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="overline"
            sx={{
              px: 2,
              py: 0.75,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
             
              color: theme.palette.background.default,
              fontWeight: 700,
              letterSpacing: 1.2,
            }}
          >
            Our Values
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 2,
              color: theme.palette.background.default,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Why Choose Us
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: { xs: 2, md: 3 },
            mb: { xs: 5, md: 7 },
          }}
        >
          {galleryImages.map((image) => (
            <Box
              key={image.alt}
              sx={{
                gridColumn: image.gridColumn,
                minHeight: image.minHeight,
                borderRadius: "18px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
                backgroundColor: "rgba(255,255,255,0.08)",
                position: "relative",
                cursor: "pointer",
                "&:hover .why-choose-overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
                "&:hover .why-choose-image": {
                  transform: "scale(1.06)",
                },
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                className="why-choose-image"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.45s ease",
                }}
              />

              <Box
                className="why-choose-overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  p: 3,
                  backgroundColor: "rgba(20,20,20,0.82)",
                  opacity: { xs: 1, md: 0 },
                  transform: { xs: "translateY(0)", md: "translateY(16px)" },
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.background.default,
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {image.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.7,
                    maxWidth: "32ch",
                  }}
                >
                  {image.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

       
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
