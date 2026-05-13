import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, LinearProgress, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../theme";
import insightImageOne from "../../assets/finance.jpg";
import insightImageTwo from "../../assets/work.webp";

const metrics = [
  { label: "Financial Delivered Growth", value: 98 },
  { label: "Financial Revenue Growth", value: 98 },
];

const InsightsSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 7 },
            alignItems: "center",
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
              About Our Milta
            </Typography>

            <Typography
              variant="h3"
              sx={{ mt: 1.5, mb: 2, color: theme.palette.secondary.main }}
            >
              Shaping stronger financial futures with practical insight.
            </Typography>

            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4 }}>
              We turn raw numbers into usable direction, helping businesses make
              better decisions, manage risk, and build healthier financial
              routines over time.
            </Typography>

            <Stack spacing={2.5}>
              {metrics.map((metric) => (
                <Box key={metric.label}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 0.8 }}
                  >
                    <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                      {metric.label}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                      {metric.value}%
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={metric.value}
                    sx={{
                      height: 10,
                      borderRadius: 999,
                      backgroundColor: "rgba(20,20,20,0.08)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 999,
                        backgroundColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Box>
              ))}
            </Stack>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                mt: 4,
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                px: 3,
                py: 1.2,
                borderRadius: "999px",
                "&:hover": {
                  bgcolor: theme.palette.secondary.main,
                },
              }}
            >
              Schedule A Call Now
            </Button>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            <Box
              component="img"
              src={insightImageOne}
              alt="Financial planning session"
              sx={{
                width: "100%",
                height: { xs: 280, md: 360 },
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: "0 14px 32px rgba(20,20,20,0.10)",
              }}
            />
            <Box
              component="img"
              src={insightImageTwo}
              alt="Business team reviewing reports"
              sx={{
                width: "100%",
                height: { xs: 280, md: 360 },
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: "0 14px 32px rgba(20,20,20,0.10)",
                mt: { xs: 0, md: 5 },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InsightsSection;
