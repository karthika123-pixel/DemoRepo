import React from "react";
import { Box, Container, Typography } from "@mui/material";
import theme from "../../theme";

const logos = ["GlobalBank", "FeatherDev", "Boltshift", "Lightbox"];

const ClientStrip = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 7 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mb: 4, color: theme.palette.secondary.main }}
        >
          Join 4,000+ companies already growing
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 2,
          }}
        >
          {logos.map((logo) => (
            <Box
              key={logo}
              sx={{
                py: 2.2,
                px: 2,
                borderRadius: 3,
                textAlign: "center",
                backgroundColor: "#fff",
                border: "1px solid rgba(20,20,20,0.08)",
                color: theme.palette.secondary.main,
                fontWeight: 700,
                fontSize: "1.05rem",
              }}
            >
              {logo}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientStrip;
