import React from "react";
import { Box, Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TwoColumnFeaturesNoImage = ({ features }) => {
  return (
    <Box sx={{ pt: 3, pb: 6, px: { xs: 1.5, sm: 2.5, md: 3 }, backgroundColor: "#f5f1e5" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
          {features.map((feature, idx) => (
            <Grid
              item
              key={idx}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: "100%", sm: "100%", md: 550 },
                maxWidth: 550,
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%", // take full width of the grid item
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 4, sm: 5, md: 6 },
                  backgroundColor: "#ffffff",
                  borderRadius: 4,
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 12px 35px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    fontSize: { xs: "1.6rem", md: "1.9rem" },
                    color: "#1c1c1c",
                  }}
                >
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    color: "#555",
                    lineHeight: 1.7,
                  }}
                >
                  {feature.description}
                </Typography>

                {/* Points */}
                <List disablePadding sx={{ textAlign: "left" }}>
                  {feature.points.map((point, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mb: 1.5,
                        py: 0,
                        pl: 0,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{ color: "#ff9401", mt: "4px", mr: 1.5, fontSize: 22 }}
                      />
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontWeight: 500,
                              fontSize: { xs: "0.95rem", md: "1rem" },
                              lineHeight: 1.6,
                              color: "#333",
                            }}
                          >
                            {point}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TwoColumnFeaturesNoImage;
