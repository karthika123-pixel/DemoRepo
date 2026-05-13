import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { BarChart, Handshake } from "@mui/icons-material";

const NumbersInGoodHands = () => {
  return (
    <Box
      sx={{
        py: { xs: 5, sm: 6, md: 8 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            color: "primary.main",
            fontWeight: 700,
            mb: { xs: 4, sm: 6, md: 8 },
            fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
            px: { xs: 2, md: 0 },
          }}
        >
          Your Numbers Are in Good Hands
        </Typography>

        {/* Grid Section */}
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Item 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              textAlign="center"
              px={{ xs: 2, sm: 3 }}
              sx={{
                height: "100%",
              }}
            >
              <BarChart
                sx={{
                  fontSize: { xs: 45, sm: 50, md: 55 },
                  mb: 2,
                  color: "primary.main",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 1,
                  fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.6rem" },
                }}
              >
                10+ Years
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                Combined experience across the Milta Accounting Service.
              </Typography>
            </Box>
          </Grid>

          {/* Item 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              textAlign="center"
              px={{ xs: 2, sm: 3 }}
              sx={{
                height: "100%",
              }}
            >
              <Handshake
                sx={{
                  fontSize: { xs: 45, sm: 50, md: 55 },
                  mb: 2,
                  color: "primary.main",
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "primary.main",
                  mb: 1,
                  fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.6rem" },
                }}
              >
                10+ Years
              </Typography>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  lineHeight: 1.7,
                }}
              >
                The average retention of our valued accounting clients.
              </Typography>
            </Box>
          </Grid>
        </Grid>


      </Container>
    </Box>
  );
};

export default NumbersInGoodHands;
