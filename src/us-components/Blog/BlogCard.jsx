import { Box, Chip, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import theme from "../../theme";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const BlogCard = ({ blog }) => {
  return (
    <Box
      component={Link}
      to={`/us/blogs/${blog.slug}`}
      sx={{
        textDecoration: "none",
        display: "block",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          maxWidth: { xs: 290, sm: 210, md: 360 },
          minHeight: { xs: 100, sm: 210, md: 230 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { xs: 2, sm: 2.5, md: 3 },
          borderRadius: 4,
          backgroundColor: "#fff",
          border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
          boxShadow: "0 18px 38px rgba(20,20,20,0.06)",
          transition:
            "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            borderColor: alpha(theme.palette.primary.main, 0.42),
            boxShadow: "0 24px 48px rgba(20,20,20,0.11)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            mb: 1.4,
            flexWrap: "wrap",
          }}
        >
          <Chip
            label={blog.category || "Blog"}
            size="small"
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.12),
              color: theme.palette.secondary.main,
              fontWeight: 700,
              borderRadius: 2,
            }}
          />

          <Typography
            variant="caption"
            sx={{ color: theme.palette.text.secondary }}
          >
            {formatDate(blog.created_at)}
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: theme.palette.secondary.main,
            mb: 1.1,
            lineHeight: 1.24,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: { xs: "2.6rem", sm: "3rem" },
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.15rem" },
          }}
        >
          {blog.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            minHeight: { xs: "3.8rem", sm: "4.5rem" },
            flexGrow: 1,
          }}
        >
          {blog.excerpt ||
            "Explore the full article for deeper context and actionable takeaways."}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            mt: "auto",
          }}
        >
          Read article
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
