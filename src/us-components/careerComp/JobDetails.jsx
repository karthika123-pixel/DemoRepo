import React from "react";
import { Box, Typography, Button, Stack, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";



const JobDetails = ({ job }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  if (!job)
    return (
      <Box
        sx={{
          width: "100%",
          p: 4,
          bgcolor: "#fff",
          borderRadius: 2,
          textAlign: "center",
          boxShadow: 1,
        }}
      >
        <Typography color="text.secondary">
          Select a job to view details
        </Typography>
      </Box>
    );

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 2,
        boxShadow: 1,

        // ⭐ Sticky only on desktop
        position: {
          xs: "static",
          md: "sticky",
        },
        top: {
          md: "90px", // Adjust based on your header height
        },
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        color={theme.palette.secondary.main}
        sx={{
          fontSize: {
            xs: "18px",
            sm: "20px",
            md: "24px",
          },
        }}
      >
        {job.title}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 1 }}>
        <LocationOnIcon color="success" />
        <Typography
          sx={{
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "16px",
            },
          }}
        >
          {job.location}
        </Typography>

        <WorkIcon color="info" />
        <Typography
          sx={{
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "16px",
            },
          }}
        >
          {job.experience}
        </Typography>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography
        variant="h6"
        sx={{
          fontSize: {
            xs: "15px",
            sm: "16px",
            md: "18px",
          },
        }}
      >
        Responsibilities
      </Typography>

      <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
        {job.responsibilities.map((item, i) => (
          <li key={i}>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "16px",
                },
              }}
            >
              {item}
            </Typography>
          </li>
        ))}
      </ul>

      <Typography
        variant="h6"
        sx={{
          mt: 2,
          fontSize: {
            xs: "15px",
            sm: "16px",
            md: "18px",
          },
        }}
      >
        Required Skills
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
        {job.skills.map((skill, i) => (
          <Box
            key={i}
            sx={{
              px: 2,
              py: 0.5,
              bgcolor: "#e6f4ea",
              borderRadius: "20px",
              fontSize: {
                xs: "12px",
                sm: "13px",
                md: "15px",
              },
            }}
          >
            {skill}
          </Box>
        ))}
      </Stack>

      <Button
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: theme.palette.secondary.main,
          px: 4,
          py: 1,
          borderRadius: "20px",
          "&:hover": { bgcolor: theme.palette.secondary.dark ?? "#0f281c" },
          fontSize: {
            xs: "13px",
            sm: "14px",
            md: "16px",
          },
        }}
         onClick={() => navigate("/apply")} 
      >
        Apply Now
      </Button>
    </Box>
  );
};

export default JobDetails;
