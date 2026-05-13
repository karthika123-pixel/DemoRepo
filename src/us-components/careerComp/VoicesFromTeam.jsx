// src/components/careerComp/VoicesFromTeam.jsx
import React, { useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
 
  {
    text: "The collaborative culture here is unmatched. Every idea is valued, and the leadership team genuinely invests in our development. I’ve grown more in two years than I ever imagined!",
    name: "Siva Kumar",
    role: "Associate Business Analyst",
  },
  {
    text: "From day one, I felt welcomed. The training programs and mentorship opportunities show that Milta wants us to succeed, not just as professionals but as individuals.",
    name: "Anish Bosco",
    role: "Business Development Executive",
  },
  {
    text: "Diversity isn’t just a buzzword here. My team includes people from various backgrounds, and it’s amazing how that drives creativity in solving client challenges.",
    name: "Kavitha",
    role: "HR Executive",
  },
];

const VoicesFromTeam = () => {
  const theme = useTheme();
  const scrollRef = useRef(null);

  // Scroll handler
  const scroll = (direction) => {
    const container = scrollRef.current;

    // Scroll by card width (responsive)
    const cardWidth = container.clientWidth / 3; // desktop = 3 cards
    const scrollAmount = cardWidth + 24; // adds gap

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 6 },
        px: { xs: 2, sm: 4 },
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0b1a12 0%, #143425 60%, #0a0a0a 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontFamily: theme.typography.body1.fontFamily,
            background: "linear-gradient(to right, #ff9401, #ffc861, #ff9401)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
          }}
        >
          Voices from Our Team
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#e5e5e5",
            mb: { xs: 5, md: 3 },
            fontFamily: theme.typography.body1.fontFamily,
            fontSize: { xs: "1rem", sm: "1.1rem" },
          }}
        >
          Hear directly from the people who make Milta great!
        </Typography>

        {/* Horizontal Scroll Cards */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            py: 2,
            px: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {testimonials.map((item, index) => (
            <Card
              key={index}
              sx={{
                flex: {
                  xs: "0 0 85%", // 1 card visible on mobile
                  sm: "0 0 48%", // 2 cards visible on tablet
                  md: "0 0 32%", // EXACT 3 cards visible on desktop
                },
                maxWidth: "100%",
                height: { xs: "auto", md: 300 },
                borderRadius: 4,
                background:
                  "linear-gradient(145deg, rgba(20,52,37,0.95), rgba(10,20,15,0.95))",
                border: "1px solid rgba(255,148,1,0.3)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 15px 40px rgba(255,148,1,0.3)",
                },
              }}
            >
              <CardContent sx={{ textAlign: "left" }}>
                <FormatQuoteIcon
                  sx={{
                    color: "#ff9401",
                    fontSize: 40,
                    mb: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#f5f5f5",
                    lineHeight: 1.7,
                    mb: 3,
                    fontFamily: theme.typography.body1.fontFamily,
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    textAlign: "justify",
                  }}
                >
                  {item.text}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "#ff9401",
                    fontFamily: theme.typography.body1.fontFamily,
                  }}
                >
                  — {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#c0c0c0",
                    fontFamily: theme.typography.body1.fontFamily,
                  }}
                >
                  {item.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Bottom Arrow Controls */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,148,1,0.4)",
              "&:hover": { background: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ color: "#ff9401" }} />
          </IconButton>

          <IconButton
            onClick={() => scroll("right")}
            sx={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,148,1,0.4)",
              "&:hover": { background: "rgba(255,255,255,0.2)" },
            }}
          >
            <ArrowForwardIosIcon sx={{ color: "#ff9401" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default VoicesFromTeam;
