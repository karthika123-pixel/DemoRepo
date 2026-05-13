import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import theme from "../../theme";

const CtaSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.background.default,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ color: theme.palette.background.default, mb: 1.5 }}>
              Ready for expert guidance?
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 560 }}>
              Every business can benefit from stronger financial visibility.
              Let&apos;s talk about the systems, reporting, and support your
              team needs next.
            </Typography>
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <TextField
              fullWidth
              placeholder="Email Address"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "999px",
                  backgroundColor: "#fff",
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                minWidth: 180,
                borderRadius: "999px",
                bgcolor: theme.palette.primary.main,
                color: "#fff",
                px: 3,
                "&:hover": {
                  bgcolor: "#6d8d37",
                },
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CtaSection;
