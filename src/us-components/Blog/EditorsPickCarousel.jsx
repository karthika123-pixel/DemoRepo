import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Box,
  Chip,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../../api/client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "../../theme";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const EditorsPickCarousel = () => {
  const [picks, setPicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({ editors_pick: true });
      setPicks(data || []);
      setLoading(false);
    };
    load();
  }, []);

  const items = loading ? Array.from({ length: 3 }) : picks;

  return (
    <Box sx={{ mt: { xs: 5, md: 6 }, position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mb: 2.5,
        }}
      >
        <Typography variant="h4" sx={{ color: theme.palette.secondary.main }}>
          Editor&apos;s Picks
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton
            className="prev-btn"
            sx={{
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
              bgcolor: "#fff",
              "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.12) },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>

          <IconButton
            className="next-btn"
            sx={{
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
              bgcolor: "#fff",
              "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.12) },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={22}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((p, index) => (
          <SwiperSlide key={p?.id || index} style={{ height: "auto" }}>
            {loading ? (
              <Box
                sx={{
                  p: 3,
                  borderRadius: 4,
                  bgcolor: "#fff",
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
                }}
              >
                <Skeleton width="26%" />
                <Skeleton width="92%" height={44} />
                <Skeleton width="70%" />
              </Box>
            ) : (
              <Box
                onClick={() => navigate(`/us/blogs/${p.slug}`)}
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 4,
                  cursor: "pointer",
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.16
                  )}, ${alpha(theme.palette.secondary.main, 0.06)})`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.22)}`,
                  boxShadow: "0 16px 32px rgba(20,20,20,0.06)",
                  transition: "transform 0.28s ease, box-shadow 0.28s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 24px 44px rgba(20,20,20,0.12)",
                  },
                }}
              >
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                  {formatDate(p.created_at)}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mt: 1.1,
                    color: theme.palette.secondary.main,
                    lineHeight: 1.25,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {p.title}
                </Typography>

                <Chip
                  label={p.category || "Article"}
                  size="small"
                  sx={{
                    mt: 2,
                    fontWeight: 700,
                    bgcolor: theme.palette.secondary.main,
                    color: "#fff",
                  }}
                />
              </Box>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EditorsPickCarousel;
