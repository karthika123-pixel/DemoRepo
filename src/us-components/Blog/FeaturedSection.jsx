import { Box, Chip, Grid, Skeleton, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getBlogs } from "../../api/client";
import { useEffect, useState } from "react";
import theme from "../../theme";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const FeaturedSection = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({
        featured: true,
        order: "created_at",
        ascending: false,
        limit: 3,
      });
      setFeatured(data || []);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <Box sx={{ mt: { xs: 5, md: 6 } }}>
      <Typography
        variant="h4"
        sx={{ color: theme.palette.secondary.main, mb: 2.5 }}
      >
        Featured Reads
      </Typography>

      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {(loading ? Array.from({ length: 2 }) : featured).map((item, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={item?.id || index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {loading ? (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: 620 },
                  display: "flex",
                  flexDirection: "column",
                  p: 3,
                  minHeight: { xs: 420, md: 500 },
                  borderRadius: 4,
                  bgcolor: "#fff",
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
                }}
              >
                <Skeleton variant="rounded" height={260} />
                <Skeleton sx={{ mt: 2 }} width="30%" />
                <Skeleton width="90%" height={46} />
                <Skeleton width="70%" />
              </Box>
            ) : (
              <Box
                component={Link}
                to={`/us/blogs/${item.slug}`}
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: 365 },
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  minHeight: { xs: 220, md: 280 },
                  borderRadius: 4,
                  backgroundColor: "#fff",
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
                  boxShadow: "0 18px 38px rgba(20,20,20,0.06)",
                  transition: "transform 0.28s ease, box-shadow 0.28s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 24px 46px rgba(20,20,20,0.1)",
                  },
                }}
              >
                {item.image_url ? (
                  <Box
                    component="img"
                    src={item.image_url}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: { xs: 220, sm: 240, md: 270 },
                      objectFit: "cover",
                      borderRadius: 3,
                      display: "block",
                      flexShrink: 0,
                    }}
                  />
                ) : null}

                <Box
                  sx={{
                    mt: 2.2,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.2,
                      flexWrap: "wrap",
                      alignItems: "center",
                    }}
                  >
                    <Chip
                      label={item.category || "Featured"}
                      size="small"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.12),
                        color: theme.palette.secondary.main,
                        fontWeight: 700,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {formatDate(item.created_at)}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      mt: 1.5,
                      color: theme.palette.secondary.main,
                      lineHeight: 1.2,
                      fontSize: { xs: "1.5rem", md: "1.8rem" },
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: { md: "6.5rem" },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: "auto",
                      pt: 1.3,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    {item.author} • curated by Milta
                  </Typography>
                </Box>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedSection;
