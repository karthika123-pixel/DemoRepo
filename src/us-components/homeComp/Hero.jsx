import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { alpha, useTheme } from "@mui/material/styles";

import Accounting from "@/assets/accounting.jpg";
import Tax from "@/assets/tax.jpg";
import CPA from "@/assets/cpa.jpg";
import Finance from "@/assets/finance.jpg";

const slides = [
  {
    tag: "ACCOUNTING SERVICES",
    title: "Unlock The Future Of Business Consulting",
    desc: "Providing tailored consulting services that drive transformation for businesses of all sizes.",
    image: Accounting,
  },
  {
    tag: "TAX SERVICES",
    title: "Smart Tax Planning & Strategy",
    desc: "Professional US tax preparation with accurate compliance.",
    image: Tax,
  },
  {
    tag: "CPA SERVICES",
    title: "Best CPA Services for Growth",
    desc: "Helping businesses scale with expert financial insights.",
    image: CPA,
  },
  {
    tag: "FINANCIAL SERVICES",
    title: "Financial Control & Strategy",
    desc: "Optimize your accounting systems with expert guidance.",
    image: Finance,
  },
];

export default function DiagonalHeroCarousel() {
  const theme = useTheme();
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1)),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const white = theme.palette.common.white;
  const darkPanel = theme.palette.secondary.main;
  const accent = theme.palette.primary.main;
  const mutedText = alpha(white, 0.78);
  const subtleText = alpha(white, 0.68);

  return (
    <Box
      sx={{
        minHeight: { xs: 520, sm: 620, md: "70vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        overflow: "hidden",
        backgroundColor: darkPanel,
        position: "relative",
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          order: { xs: 1, md: 1 },
          bgcolor: { xs: "transparent", md: darkPanel },
          color: white,
          display: "flex",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 35 },
          py: { xs: 0, md: 0 },
          position: { xs: "absolute", md: "relative" },
          inset: { xs: 0, md: "auto" },
          zIndex: { xs: 4, md: 2 },
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            mx: { xs: "auto", md: 0 },
            mt: { xs: "auto", md: 0 },
            mb: { xs: 7, sm: 8, md: 0 },
            px: { xs: 1, sm: 2, md: 0 },
          }}
        >
          {slides.map((s, i) => {
            const active = current === i;
            return (
              <Box
                key={i}
                sx={{
                  position: active ? "relative" : "absolute",
                  opacity: active ? 1 : 0,
                  transform: active
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: "all 0.6s ease",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    letterSpacing: { xs: 1.2, sm: 2 },
                    fontSize: { xs: "0.72rem", sm: "0.8rem" },
                    color: { xs: alpha(white, 0.88), md: subtleText },
                    fontFamily: theme.typography.body2.fontFamily,
                    textAlign: { xs: "left", md: "left" },
                  }}
                >
                  {s.tag}
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    fontSize: { xs: "2rem", sm: "2.4rem", md: "3rem" },
                    lineHeight: { xs: 1.15, md: 1.2 },
                    color: white,
                    textAlign: { xs: "left", md: "left" },
                    textShadow: { xs: "0 6px 20px rgba(0,0,0,0.35)", md: "none" },
                  }}
                >
                  {s.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: { xs: 1.5, md: 2 },
                    color: { xs: alpha(white, 0.92), md: mutedText },
                    lineHeight: 1.6,
                    maxWidth: 520,
                    fontSize: { xs: "0.96rem", sm: "1rem" },
                    textAlign: { xs: "left", md: "left" },
                    mx: { xs: 0, md: 0 },
                    textShadow: { xs: "0 4px 16px rgba(0,0,0,0.3)", md: "none" },
                  }}
                >
                  {s.desc}
                </Typography>

                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    mt: { xs: 3, md: 4 },
                    bgcolor: accent,
                    color: theme.palette.common.black,
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.2, md: 1.25 },
                    width: { xs: "100%", sm: "auto" },
                    maxWidth: { xs: 320, sm: "none" },
                    borderRadius: "30px",
                    boxShadow: "none",
                    display: "flex",
                    mx: { xs: 0, md: 0 },
                    "& .MuiButton-endIcon": {
                      transition: theme.transitions.create("transform"),
                    },
                    "&:hover": {
                      bgcolor: alpha(accent, 0.9),
                      boxShadow: "none",
                      "& .MuiButton-endIcon": {
                        transform: "translateX(2px)",
                      },
                    },
                  }}
                >
                  Schedule a Consultation
                </Button>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* RIGHT IMAGE WITH DIAGONAL CUT */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          minHeight: { xs: 520, sm: 620, md: "auto" },
          order: { xs: 2, md: 2 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {slides.map((s, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: { xs: "center top", md: "center" },
              opacity: current === i ? 1 : 0,
              transition: "opacity 0.8s ease",
              clipPath: { xs: "none", md: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" },
            }}
          />
        ))}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: { xs: "block", md: "none" },
            background:
              "linear-gradient(180deg, rgba(20,20,20,0.16) 0%, rgba(20,20,20,0.48) 52%, rgba(20,20,20,0.88) 100%)",
            zIndex: 1,
          }}
        />

        {/* WHITE ANGLE LINE */}
        <Box
          sx={{
            position: "absolute",
            left: { xs: 0, md: "-60px" },
            top: 0,
            width: { xs: "100%", md: "120px" },
            height: { xs: 0, md: "100%" },
            bgcolor: darkPanel,
            transform: { xs: "none", md: "skewX(-10deg)" },
            zIndex: 2,
            display: { xs: "none", md: "block" },
          }}
        />

        {/* NAVIGATION */}
        <Stack
          direction={{ xs: "row", md: "column" }}
          spacing={2}
          sx={{
            position: "absolute",
            right: { xs: 16, md: 20 },
            bottom: { xs: 16, md: 40 },
            zIndex: 3,
          }}
        >
          <IconButton
            onClick={prev}
            sx={{
              bgcolor: alpha(white, 0.2),
              color: white,
              backdropFilter: "blur(6px)",
              border: `1px solid ${alpha(white, 0.18)}`,
              "&:hover": {
                bgcolor: alpha(accent, 0.28),
              },
            }}
          >
            <ArrowBack />
          </IconButton>

          <IconButton
            onClick={next}
            sx={{
              bgcolor: alpha(white, 0.2),
              color: white,
              backdropFilter: "blur(6px)",
              border: `1px solid ${alpha(white, 0.18)}`,
              "&:hover": {
                bgcolor: alpha(accent, 0.28),
              },
            }}
          >
            <ArrowForward />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
