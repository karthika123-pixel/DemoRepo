import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const CareerCta = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 3, sm: 5 },
        background: "linear-gradient(90deg, #ff8c00, #ff6600, #ff8c00)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "center",
          backgroundColor: "#fff",
          p: { xs: 4, sm: 6 },
          borderRadius: 4,
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontFamily: theme.typography.body1.fontFamily,
            background:
              "linear-gradient(to right, hsl(160, 60%, 20%), hsl(135, 50%, 35%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
            fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.2rem" },
          }}
        >
          Let’s Continue Interacting
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontSize: { xs: "0.95rem", sm: "1.05rem" },
            mb: 4,
            lineHeight: 1.8,
            fontFamily: theme.typography.body1.fontFamily,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Stay informed about new job openings and exciting career possibilities
          by connecting with us on LinkedIn.
        </Typography>

        <Stack direction="row" justifyContent="center">
          <Button
            component="a"
            href="https://www.linkedin.com/company/milta-accounting-services/"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<LinkedInIcon />}
            sx={{
              backgroundColor: "#0077b5",
              textTransform: "none",
              fontWeight: 600,
              px: { xs: 3, sm: 4 },
              py: 1.3,
              borderRadius: 3,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              fontFamily: theme.typography.body1.fontFamily,
              boxShadow: "0 6px 15px rgba(0, 118, 181, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#005c8a",
                transform: "translateY(-3px)",
                boxShadow: "0 8px 20px rgba(0, 118, 181, 0.45)",
              },
            }}
          >
            Go to LinkedIn
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CareerCta;
