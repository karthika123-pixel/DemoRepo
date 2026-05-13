import React, { useRef, useState } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import ContactPopup from "../common/ContactPopup";

import "swiper/css";
import "swiper/css/navigation";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import work1 from "../../assets/money-2.webp";
import work2 from "../../assets/money-3.webp";
import work3 from "../../assets/Accounts1.webp";
import work4 from "../../assets/Accountable-4.webp";
import theme from '../../theme.js';


const slides = [
  {
    title: "Expert Outsourcing <br> Accounting & Bookkeeping Services",
    description:
      "Trusted by 100+ Clients Across 12 Countries. Proudly serving small businesses, growing enterprises, and Fortune 500 companies.",
    image: work3,
    alt: "Outsourcing accounting and bookkeeping services for global businesses",
    link: "/us/services/bookkeeping-company-in-the-usa/",
    btnText: "Learn More",
  },
  {
    title: "Tax Planning and <br> Preparation Services in the USA!",
    description:
      "Professional US Expat Tax Service for Federal, State, and City Tax Preparation.",
    image: work1,
    alt: "Tax planning and preparation services for businesses in the USA",
    link: "/us/services/tax-planning-and-preparation-services-usa/",
    btnText: "Learn More",
  },
  {
    title: "The Best CPA Service <br> for Small Businesses in the USA",
    description: "We offer the best CPA service for small businesses in the USA.",
    image: work4,
    alt: "Certified public accountant services for small businesses in the USA",
    link: "/us/services/best-cpa-services-for-small-businesses-in-the-usa/",
    btnText: "Learn More",
  },
  {
    title: "Expert Financial Controller <br> Services in the USA",
    description: "Improve your accounting systems with experts.",
    image: work2,
    alt: "Professional financial controller services for business accounting",
    link: "/us/services/financial-controller-services-in-the-usa/",
    btnText: "Learn More",
  },
];

export default function BannerSlider() {
  const navigate = useNavigate();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // ✅ Navigation Button Refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Background Animation */}
      <style>
        {`
          @keyframes waveMotion {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* ✅ Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}

        // ✅ FIX: Attach navigation after swiper loads
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        style={{ width: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                minHeight: { xs: "70vh", sm: "75vh", md: "80vh", lg: "85vh" },
                display: "flex",
                alignItems: "center",
                background:
                  "linear-gradient(270deg,#2b6d2a,#5d9031,#85ac37,#2b6d2a)",
                backgroundSize: "400% 400%",
                animation: "waveMotion 15s ease infinite",
                px: { xs: 2, sm: 4, md: 6 },
              }}
            >
              <Container maxWidth={false} sx={{ maxWidth: "1300px" }}>
                <Grid
                  container
                  alignItems="center"
                  spacing={{ xs: 3, sm: 4, md: 6 }}
                  sx={{
                    flexDirection: { xs: "column-reverse", md: "row" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {/* TEXT */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ maxWidth: 650, mx: { xs: "auto", md: 0 } }}>
                      <Typography

                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          fontSize: {
                            xs: "1.6rem",
                            sm: "2.2rem",
                            md: "3rem",
                            lg: "3.1rem",
                          },
                          lineHeight: 1.3,
                          color: "#fff",
                        }}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />

                      <Typography
                        sx={{
                          mb: 4,
                          fontSize: {
                            xs: "0.95rem",
                            sm: "1.1rem",
                            md: "1.25rem",
                          },
                          lineHeight: 1.7,
                          color: "#f2f2f2",
                        }}
                      >
                        {slide.description}
                      </Typography>

                      <Button
                        variant="contained"
                        onClick={() => navigate(slide.link)}
                        sx={{
                          background: theme.palette.secondary.main,
                          color: "#fff",
                          fontWeight: 600,
                          px: { xs: 4, md: 5 },
                          py: { xs: 1, md: 1.3 },
                          borderRadius: "50px",
                          textTransform: "none",
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                          "&:hover": { background: "#ffb000" },
                        }}
                      >
                        {slide.btnText}
                      </Button>
                    </Box>
                  </Grid>

                  {/* IMAGE */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    justifyContent={{ xs: "center", md: "flex-end" }}
                  >
                    <Box
                      sx={{
                        width: { xs: 220, sm: 280, md: 450, lg: 520 },
                        height: { xs: 220, sm: 280, md: 450, lg: 520 },
                        borderRadius: "50%",
                        overflow: "hidden",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                        aspectRatio: "1 / 1",
                        bgcolor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <Box
                        component="img"
                        src={slide.image}
                        alt={slide.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchpriority={index === 0 ? "high" : "low"}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Navigation Arrows */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 16, sm: 24, md: 30 },
          right: { xs: 16, sm: 24, md: 30 },
          display: "flex",
          gap: { xs: 1, md: 2 },
          zIndex: 10,
        }}
      >
        <Box ref={prevRef} sx={arrowStyle}>
          <ArrowBackIosNewIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
        </Box>

        <Box ref={nextRef} sx={arrowStyle}>
          <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
        </Box>
      </Box>
      <ContactPopup open={contactModalOpen} handleClose={() => setContactModalOpen(false)} />
    </Box>
  );
}

/* Arrow Button Styling */
const arrowStyle = {
  width: { xs: 35, sm: 40, md: 45 },
  height: { xs: 35, sm: 40, md: 45 },
  border: "2px solid #fff",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#fff",
  backgroundColor: "rgba(255,255,255,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.25)",
  },
};
