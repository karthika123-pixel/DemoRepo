import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import theme from '../../theme.js';

const industries = [
  { name: "Hospitality", count: 2853 },
  { name: "Manufacturing", count: 1200 },
  { name: "Retail", count: 1740 },
  // ... etc
];

function Industries() {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: theme => theme.palette.grey[100] }}>
      <Container>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Industries Served
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {industries.map((ind, idx) => (
            <Grid item xs={6} sm={4} md={2} key={idx}>
              <Box sx={{ textAlign: "center", p: 2 }}>
                <Typography variant="h5">{ind.count}</Typography>
                <Typography variant="subtitle2">{ind.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Industries;
