import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

const ContactInfoCards = () => {
  const cards = [
    {
      icon: <EmailIcon sx={{ fontSize: 28, color: "background.default" }} />,
      title: "Our Email",
      desc: "advicx@gmail.com",
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 28, color: "background.default" }} />,
      title: "Phone",
      desc: "+1 123 456 7890",
    },
    {
      icon: <AccessTimeFilledIcon sx={{ fontSize: 28, color: "background.default" }} />,
      title: "Schedule",
      desc: "Sunday-Fri: 9 AM - 6 PM",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="overline"
            sx={{
              fontWeight: 700,
              color: "secondary.main",
              letterSpacing: 1.5,
              backgroundColor: "background.paper",
              px: 2,
              py: 0.5,
              borderRadius: "4px",
            }}
          >
            REACH OUT FOR EXPERT GUIDANCE
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mt: 2,
              color: "primary.main",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Let's Discuss Your Business Needs
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {cards.map((card, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "background.paper",
                  p: 3,
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="700" color="primary.main" sx={{ lineHeight: 1.2, mb: 0.5 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="secondary.main">
                    {card.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactInfoCards;
