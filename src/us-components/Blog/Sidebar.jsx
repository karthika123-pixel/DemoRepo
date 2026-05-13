import { Box, Chip, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import theme from "../../theme";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function SidebarLatest({ blogs = [], title = "Latest Posts" }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", lg: 360 },
        p: 3,
        borderRadius: 4,
        backgroundColor: "#fff",
        border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
        boxShadow: "0 16px 34px rgba(20,20,20,0.06)",
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: theme.palette.secondary.main, mb: 2 }}
      >
        {title}
      </Typography>

      <Stack spacing={1.5}>
        {blogs.map((b) => (
          <Box
            key={b.id}
            component={Link}
            to={`/us/blogs/${b.slug}`}
            sx={{
              width: "100%",
              minHeight: 132,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 2,
              borderRadius: 3,
              textDecoration: "none",
              border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
              transition: "all 0.25s ease",
              "&:hover": {
                borderColor: alpha(theme.palette.primary.main, 0.42),
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <Box>
              <Chip
                label={b.category || "Blog"}
                size="small"
                sx={{
                  mb: 1,
                  bgcolor: alpha(theme.palette.primary.main, 0.12),
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  alignSelf: "flex-start",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  lineHeight: 1.35,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  minHeight: "4rem",
                }}
              >
                {b.title}
              </Typography>
            </Box>

            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                mt: 1.2,
                display: "block",
              }}
            >
              {formatDate(b.created_at)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
