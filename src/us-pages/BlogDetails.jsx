import { Box, Chip, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "../api/client";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/MainLayout";
import useFullSEO from "../utils/useFullSEO";
import { blogSEO } from "../utils/blogSEO";
import SidebarLatest from "../us-components/Blog/Sidebar";
import theme from "../theme";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const seoConfig = blogSEO[slug] || null;
  useFullSEO(seoConfig);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const response = await getBlogBySlug(slug);

      if (response && response.blog) {
        setBlog(response.blog);
        setLatestPosts(
          (response.latestPosts || []).filter((post) => post.slug !== slug)
        );
      }

      setLoading(false);
    };

    load();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <Box
          sx={{
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ color: theme.palette.primary.main }} />
        </Box>
      </Layout>
    );
  }

  if (!blog) {
    return (
      <Layout>
        <Box sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: theme.palette.secondary.main, mb: 1.5 }}>
            Blog not found
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
            The article you&apos;re looking for could not be loaded.
          </Typography>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ px: { xs: 0, md: 1 } }}>
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: { xs: 0, md: 5 },
            backgroundColor: "#fff",
            border: `1px solid ${alpha(theme.palette.secondary.main, 0.08)}`,
            boxShadow: "0 24px 48px rgba(20,20,20,0.06)",
          }}
        >
          <Typography
            component={Link}
            to="/us/blogs"
            sx={{
              textDecoration: "none",
              color: theme.palette.primary.main,
              fontWeight: 700,
              display: "inline-block",
              mb: 2.2,
            }}
          >
            Back to blog
          </Typography>

          <Box sx={{ maxWidth: 920 }}>
            <Chip
              label={blog.category || "Article"}
              sx={{
                bgcolor: alpha(theme.palette.primary.main, 0.12),
                color: theme.palette.secondary.main,
                fontWeight: 700,
                mb: 2,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                color: theme.palette.secondary.main,
                fontSize: { xs: "2.1rem", md: "3.4rem" },
                lineHeight: 1.08,
              }}
            >
              {blog.title}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mt: 1.8,
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              {blog.author || "Milta Team"} • {formatDate(blog.created_at)}
            </Typography>
          </Box>

          {blog.image_url ? (
            <Box
              component="img"
              src={blog.image_url}
              alt={blog.title}
              sx={{
                mt: 4,
                width: "100%",
                maxHeight: { xs: 260, md: 460 },
                objectFit: "cover",
                borderRadius: 4,
                display: "block",
              }}
            />
          ) : null}

          <Grid
            container
            spacing={{ xs: 4, md: 5 }}
            sx={{ mt: 1 }}
          >
            <Grid item xs={12} lg={8}>
              <Box
                sx={{
                  color: theme.palette.text.primary,
                  "& p": {
                    ...theme.typography.body1,
                    color: theme.palette.text.secondary,
                    mb: 2.1,
                  },
                  "& h1, & h2, & h3, & h4": {
                    color: theme.palette.secondary.main,
                    mt: 4,
                    mb: 1.5,
                    lineHeight: 1.2,
                  },
                  "& h2": {
                    ...theme.typography.h2,
                    fontSize: { xs: "1.7rem", md: "2.2rem" },
                  },
                  "& h3": {
                    ...theme.typography.h3,
                    fontSize: { xs: "1.45rem", md: "1.8rem" },
                  },
                  "& ul, & ol": {
                    pl: 3,
                    color: theme.palette.text.secondary,
                  },
                  "& li": {
                    mb: 1,
                    lineHeight: 1.7,
                  },
                  "& a": {
                    color: theme.palette.primary.main,
                  },
                  "& img": {
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: 16,
                    margin: "20px 0",
                  },
                  "& blockquote": {
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    pl: 2,
                    ml: 0,
                    color: theme.palette.secondary.main,
                    fontStyle: "italic",
                  },
                }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={{ position: { lg: "sticky" }, top: { lg: 100 } }}>
                <SidebarLatest blogs={latestPosts.slice(0, 5)} title="Latest Posts" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default BlogDetails;
