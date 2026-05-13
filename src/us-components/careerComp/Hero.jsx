import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomButton from "../common/CustomButton";

function ContactPageHero() {
  const theme = useTheme();
  const handleCalendlyClick = () => {
    window.open("/contact", "_blank", "noopener,noreferrer");
  }
  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #1d4230, #0f2b1d)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        px: 2,
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h1"
          fontWeight={700}
          sx={{
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.5rem" },
            mb: 2,
            lineHeight: 1.2,
            color: "#ff9401",
          }}
        >
          Careers at Milta Accounting Services
        </Typography>


        <CustomButton
        onClick={handleCalendlyClick}
          sx={{
            backgroundColor: "#ff9401",
            color: "#fff",
            "&:hover": { backgroundColor: "#e68a00", transform: "scale(1.05)" },
            transition: "all 0.3s ease",
            px: { xs: 3, sm: 4 },
            py: { xs: 1.5, sm: 2 },
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Learn More
        </CustomButton>
      </Container>

      {/* Decorative shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: 200,
          height: 200,
          backgroundColor: "rgba(255,148,1,0.2)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: 300,
          height: 300,
          backgroundColor: "rgba(255,148,1,0.15)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default ContactPageHero;
