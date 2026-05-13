import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import theme from "../../theme";

const SubscriptionBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 5,
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${alpha(
          theme.palette.secondary.main,
          0.94
        )} 50%, ${alpha(theme.palette.primary.main, 0.7)} 100%)`,
        color: theme.palette.background.default,
        boxShadow: "0 24px 48px rgba(20,20,20,0.16)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.16), transparent 28%), radial-gradient(circle at bottom left, rgba(255,255,255,0.1), transparent 22%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 7, md: 9 }, px: { xs: 3, md: 5 }, position: "relative", zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: "0.24em",
            fontWeight: 700,
            color: alpha(theme.palette.background.default, 0.72),
          }}
        >
          Milta Insights
        </Typography>

        <Typography
          variant="h2"
          sx={{
            mt: 1.2,
            maxWidth: 720,
            color: theme.palette.background.default,
            fontSize: { xs: "2.3rem", md: "3.6rem" },
            lineHeight: 1.08,
          }}
        >
          Practical finance, tax, and growth ideas for modern business teams.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            maxWidth: 620,
            color: alpha(theme.palette.background.default, 0.82),
            fontSize: { xs: "1rem", md: "1.05rem" },
          }}
        >
          Explore curated writing from the Milta team across accounting,
          compliance, operations, and digital growth, with a cleaner reading
          experience on every screen.
        </Typography>

        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.5,
            maxWidth: 560,
          }}
        >
          <TextField
            placeholder="Enter your email"
            size="medium"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 999,
                backgroundColor: alpha("#ffffff", 0.96),
                color: theme.palette.secondary.main,
                "& fieldset": {
                  borderColor: alpha(theme.palette.secondary.main, 0.08),
                },
              },
            }}
          />

          <Button
            variant="contained"
            sx={{
              px: 3.6,
              minHeight: 56,
              borderRadius: 999,
              bgcolor: theme.palette.primary.main,
              color: "#fff",
              fontWeight: 700,
              whiteSpace: "nowrap",
              boxShadow: "0 16px 26px rgba(122,158,62,0.28)",
              "&:hover": {
                bgcolor: "#6d8d37",
              },
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SubscriptionBanner;
