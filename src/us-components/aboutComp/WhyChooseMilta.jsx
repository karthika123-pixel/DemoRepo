import React from "react";
import {
  ArrowForward,
  CheckCircle,
  Groups2,
  QueryStats,
  ShieldOutlined,
} from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../../theme";
import introImage from "../../assets/bookkeeping.jpg";

const highlights = [
  "Client-centered approach",
  "Tailored accounting workflows",
  "Proven record of consistency",
  "Reliable compliance support",
];

const stats = [
  { icon: <Groups2 />, label: "Active Clients", value: "321+" },
  { icon: <QueryStats />, label: "Reports Delivered", value: "4,000+" },
  { icon: <ShieldOutlined />, label: "Secure Processes", value: "100%" },
];

const WhyChooseMilta = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 5, md: 8 },
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative", maxWidth: 500 }}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 18px 40px rgba(20,20,20,0.10)",
              }}
            >
              <Box
                component="img"
                src={introImage}
                alt="Milta consultants collaborating"
                sx={{ width: "100%", display: "block", minHeight: 420, objectFit: "cover" }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: -16,
                px: 2,
                py: 1.5,
                bgcolor: "#fff",
                borderRadius: 3,
                boxShadow: "0 12px 24px rgba(20,20,20,0.12)",
                border: `1px solid ${theme.palette.background.default}`,
              }}
            >
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                Business growth
              </Typography>
              <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
                Smarter finance operations
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                right: -16,
                bottom: 24,
                width: { xs: 180, sm: 220 },
                p: 2,
                bgcolor: "#fff",
                borderRadius: 3,
                boxShadow: "0 12px 24px rgba(20,20,20,0.12)",
                border: `1px solid ${theme.palette.background.default}`,
              }}
            >
              <Stack spacing={1.5}>
                {stats.map((stat) => (
                  <Stack
                    key={stat.label}
                    direction="row"
                    spacing={1.25}
                    alignItems="center"
                  >
                    <Box sx={{ color: theme.palette.primary.main }}>{stat.icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: 1.2,
              }}
            >
              Why Choose Milta
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mt: 1.5,
                mb: 2,
                color: theme.palette.secondary.main,
                maxWidth: 560,
              }}
            >
              Experience dependable support from an accounting team that grows with you.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: theme.palette.text.secondary,
                maxWidth: 560,
              }}
            >
              Milta combines process discipline, responsive communication, and
              practical financial insight so your back office stays strong while
              your business keeps moving forward.
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 1.5,
                mb: 4,
              }}
            >
              {highlights.map((item) => (
                <Stack key={item} direction="row" spacing={1.2} alignItems="center">
                  <CheckCircle sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: theme.palette.secondary.main }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Box>

            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
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
              Let&apos;s Work Together
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseMilta;
