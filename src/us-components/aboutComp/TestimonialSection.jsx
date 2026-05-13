import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { FormatQuote, Star } from "@mui/icons-material";
import theme from "../../theme";

const people = [
  { name: "JS", top: "14%", left: "12%" },
  { name: "AR", top: "58%", left: "8%" },
  { name: "MP", top: "74%", left: "18%" },
  { name: "LN", top: "20%", right: "12%" },
  { name: "DK", top: "52%", right: "10%" },
  { name: "TS", top: "76%", right: "18%" },
];

const TestimonialSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Typography
          variant="overline"
          sx={{
            display: "block",
            textAlign: "center",
            color: theme.palette.primary.main,
            fontWeight: 700,
            letterSpacing: 1.2,
          }}
        >
          Our Expert Team
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          sx={{ mt: 1.5, mb: 5, color: theme.palette.secondary.main }}
        >
          Meet our expert team
        </Typography>

        {people.map((person) => (
          <Box
            key={person.name}
            sx={{
              position: "absolute",
              width: 52,
              height: 52,
              borderRadius: "50%",
              backgroundColor: "#fff",
              border: `2px solid ${theme.palette.primary.main}`,
              color: theme.palette.secondary.main,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              boxShadow: "0 10px 24px rgba(20,20,20,0.10)",
              ...person,
            }}
          >
            {person.name}
          </Box>
        ))}

        <Box
          sx={{
            maxWidth: 720,
            mx: "auto",
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            backgroundColor: "#fff",
            border: "1px solid rgba(20,20,20,0.08)",
            boxShadow: "0 16px 34px rgba(20,20,20,0.08)",
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Stack direction="row" spacing={0.5}>
              {[...Array(5)].map((_, index) => (
                <Star key={index} sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
              ))}
            </Stack>
            <FormatQuote sx={{ color: theme.palette.secondary.main, fontSize: 34 }} />
          </Stack>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.9,
              mb: 3,
            }}
          >
            Partnering with Milta gave our team structure, clarity, and
            confidence. Their communication stayed sharp, their reporting stayed
            accurate, and they made complex financial work feel manageable at
            every step.
          </Typography>

          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
            <Box>
              <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
                Sheldon Jackson
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Owner, FeatherDev
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
              FeatherDev
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
