import React from "react";
import { Box, Grid, Typography, Card, CardContent, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Favorite,
  Schedule,
  School,
  Groups,
  VolunteerActivism,
  WorkspacePremium,
} from "@mui/icons-material";

const benefits = [
  {
    icon: <VolunteerActivism sx={{ fontSize: 40 }} />,
    title: "Employee Referral Bonus",
    description:
      "Refer great talent and get rewarded — because success grows when shared.",
  },
  {
    icon: <Favorite sx={{ fontSize: 40 }} />,
    title: "Paid Sick Leave",
    description: "Take the time you need to recharge. Your well-being matters most.",
  },
  {
    icon: <School sx={{ fontSize: 40 }} />,
    title: "Development Opportunities & Training Programs",
    description:
      "Unlock your potential with workshops, courses, and mentorship to fuel your career growth.",
  },
  {
    icon: <Schedule sx={{ fontSize: 40 }} />,
    title: "Flexible Schedules",
    description:
      "Balance life and work effortlessly with flexible hours that adapt to your lifestyle.",
  },
  {
    icon: <Groups sx={{ fontSize: 40 }} />,
    title: "Friendly Work Environment",
    description:
      "Collaborate with supportive colleagues who feel like family in every project.",
  },
  {
    icon: <WorkspacePremium sx={{ fontSize: 40 }} />,
    title: "Employee Training Programs",
    description:
      "Stay ahead with cutting-edge training that transforms today’s skills into tomorrow’s leadership.",
  },
];

const WhyLoveMilta = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: { xs: 6, md: 7 },
        mt: -4,
        px: { xs: 2, sm: 4 },
        background: "linear-gradient(180deg, #f8fff9 0%, #eafaf0 100%)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1300px", textAlign: "center" }}>
        {/* Header Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            fontFamily: theme.typography.body1.fontFamily,
            mb: 2,
            background: "linear-gradient(to right, #0a382a, #1a8f5a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Why You’ll Love Working With Us
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mb: { xs: 5, md: 7 },
            color: "#333",
            fontFamily: theme.typography.body1.fontFamily,
            fontSize: { xs: "1rem", sm: "1.1rem" },
          }}
        >
          At Milta, we don’t just hire talent — we invest in it. Here’s how we prioritize you.
        </Typography>

        {/* Benefits Grid */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
          {benefits.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  p: 2,
                  maxWidth:400,
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      color: "#1a8f5a",
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: theme.typography.body1.fontFamily,
                      color: "#0a382a",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#444",
                      lineHeight: 1.7,
                      fontFamily: theme.typography.body1.fontFamily,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1a8f5a",
              textTransform: "none",
              fontWeight: 600,
              px: { xs: 3, sm: 4 },
              py: 1.2,
              borderRadius: 3,
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: { xs: "0.9rem", sm: "1rem" },
              "&:hover": {
                backgroundColor: "#146c44",
              },
            }}
          >
            Join Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyLoveMilta;
