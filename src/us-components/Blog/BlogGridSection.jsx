import {
  Box,
  Chip,
  Grid,
  Pagination,
  PaginationItem,
  TextField,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getBlogs } from "../../api/client";
import BlogCard from "./BlogCard";
import theme from "../../theme";

const categories = [
  "All",
  "SEO",
  "AI",
  "Accounting",
  "Tax",
  "Finance",
  "Digital Marketing",
];

const BLOGS_PER_PAGE = 6;

const BlogGridSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      const data = await getBlogs({
        order: "created_at",
        ascending: false,
      });
      setBlogs(data || []);
    };
    load();
  }, []);

  const filtered = blogs.filter((b) => {
    const matchCategory = category === "All" || b.category === category;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / BLOGS_PER_PAGE);
  const paginatedBlogs = filtered.slice(
    (page - 1) * BLOGS_PER_PAGE,
    page * BLOGS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  return (
    <Box sx={{ mt: { xs: 5, md: 6 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "stretch", lg: "center" },
          justifyContent: "space-between",
          gap: 2.5,
          mb: 3,
        }}
      >
        <Box sx={{ flex: 1, maxWidth: { lg: 380 } }}>
          <Typography
            variant="h4"
            sx={{ color: theme.palette.secondary.main, mb: 1.25 }}
          >
            Latest Articles
          </Typography>
          <TextField
            fullWidth
            placeholder="Search articles"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                bgcolor: "#fff",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "flex-start", lg: "flex-end" },
            gap: 1,
          }}
        >
          {categories.map((c) => (
            <Chip
              key={c}
              label={c}
              onClick={() => setCategory(c)}
              sx={{
                px: 0.4,
                bgcolor:
                  category === c
                    ? theme.palette.secondary.main
                    : alpha(theme.palette.secondary.main, 0.06),
                color: category === c ? "#fff" : theme.palette.secondary.main,
                fontWeight: 700,
                border: `1px solid ${
                  category === c
                    ? theme.palette.secondary.main
                    : alpha(theme.palette.secondary.main, 0.08)
                }`,
                cursor: "pointer",
              }}
            />
          ))}
        </Box>
      </Box>

      <Grid container spacing={3} alignItems="stretch">
        {paginatedBlogs.map((b) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            key={b.id}
            sx={{
              display: "flex",
            }}
          >
            <BlogCard blog={b} />
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box sx={{ mt: 4.5, display: "flex", justifyContent: "center" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, value) => setPage(value)}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  mx: 0.25,
                  borderRadius: 2.5,
                  fontWeight: 700,
                  border: `1px solid ${alpha(
                    theme.palette.secondary.main,
                    0.1
                  )}`,
                  color: theme.palette.secondary.main,
                  "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: "#fff",
                    borderColor: theme.palette.primary.main,
                  },
                }}
              />
            )}
          />
        </Box>
      )}
    </Box>
  );
};

export default BlogGridSection;
