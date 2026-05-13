import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../common/CustomButton";

function CTASection() {
  const handleCalendlyClick = () => {
    window.open("/contact#get-in-touch", "_blank", "noopener,noreferrer");
  }
  return (
    <Box
      sx={{
        py: { xs: 8, sm: 10, md: 12 },
        background: "linear-gradient(135deg, #1d4230, #0f2b1d)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top right, rgba(255, 148, 1, 0.08), transparent 70%)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h5"
          fontWeight={600}
          mb={3}
          sx={{
            color: "#ff9401",
            fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
            lineHeight: 1.4,
          }}
        >
          Efficient and Cost-Effective Outsourced Accounting Services
        </Typography>

        <Typography
          variant="subtitle1"
          mb={4}
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.15rem" },
            lineHeight: 1.6,
          }}
        >
          Reduce labor costs and improve financial accuracy with our expert team
        </Typography>

        <CustomButton
          onClick={handleCalendlyClick}

          sx={{
            backgroundColor: "#ff9401",
            color: "#fff",
            "&:hover": { backgroundColor: "#e68a00", transform: "scale(1.03)" },
            transition: "all 0.3s ease",
            px: { xs: 3, sm: 4 },
            py: { xs: 1.5, sm: 2 },
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
          }}
        >
          Get Started
        </CustomButton>
      </Container>
    </Box>
  );
}

export default CTASection;
