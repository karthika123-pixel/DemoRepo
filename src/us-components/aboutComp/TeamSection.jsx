import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import teamOne from "../../assets/businessman.png";
import teamTwo from "../../assets/business-man.png";
import teamThree from "../../assets/businessman1.png";
import teamFour from "../../assets/accouting-professional.webp";

const teamMembers = [
  { name: "Rodger Struck", role: "Business Advisor", image: teamOne },
  { name: "Judith Rodriguez", role: "Finance Consultant", image: teamTwo },
  { name: "Alex Robertson", role: "Business Consultant", image: teamThree },
  { name: "Autumn Phillips", role: "Financial Advisor", image: teamFour },
];

const performance = [
  { value: "96%", label: "Satisfaction Rate" },
  { value: "92%", label: "Retention Rate" },
];

const TeamSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mb: 5,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: 1.2,
              }}
            >
              Our Expert Team
            </Typography>
            <Typography variant="h3" sx={{ mt: 1.5, color: theme.palette.secondary.main }}>
              Meet our expert team
            </Typography>
          </Box>

          <Stack direction="row" spacing={4} flexWrap="wrap">
            {performance.map((item) => (
              <Stack key={item.label} direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    border: `3px solid ${theme.palette.primary.main}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: theme.palette.secondary.main,
                  }}
                >
                  {item.value}
                </Box>
                <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                  {item.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: 3,
          }}
        >
          {teamMembers.map((member) => (
            <Box
              key={member.name}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                border: "1px solid rgba(20,20,20,0.08)",
                backgroundColor: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 18px 38px rgba(20,20,20,0.10)",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.background.default,
                  minHeight: 280,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 250,
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
              <Box sx={{ p: 2.5 }}>
                <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {member.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
